require('dotenv').config()
import next from 'next'
import nextBuild from 'next/dist/build'
import path from 'path'

import express from 'express'
import payload from 'payload'

import { seed } from './seed'

const app = express()
const PORT = process.env.PORT || 3000

const start = async (): Promise<void> => {
	await payload.init({
		secret: process.env.PAYLOAD_SECRET || '',
		express: app,
		onInit: () => {
			payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
		},
	})

	if (process.env.PAYLOAD_SEED === 'true') {
		payload.logger.info('---- SEEDING DATABASE ----')
		await seed(payload)
	}

	if (process.env.NEXT_BUILD) {
		app.listen(PORT, async () => {
			payload.logger.info(`Next.js is now building...`)
			// @ts-expect-error
			await nextBuild(path.join(__dirname, '../'))
			process.exit()
		})

		return
	}

	const nextApp = next({
		dev: process.env.NODE_ENV !== 'production',
	})

	const nextHandler = nextApp.getRequestHandler()

	app.get('*', (req, res) => nextHandler(req, res))

	nextApp.prepare().then(() => {
		payload.logger.info('Next.js started')

		app.listen(PORT, async () => {
			payload.logger.info(`Next.js App URL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`)
		})
	})
}

start()
