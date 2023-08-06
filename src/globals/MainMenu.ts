import { GlobalConfig } from "payload/types";

const menuColumnBlocks = [];

export const MainMenu: GlobalConfig = {
  slug: 'mainMenu',
  access: {
    read: ({ req: { user } }) => true,
    update: ({ req: { user } }) => true,
  },

  admin: {
    group: 'Admin'
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'type',
          type: 'radio',
          defaultValue: 'link',
          admin: {
            layout: 'horizontal',
          },
          options: [
            {
              label: 'Link',
              value: 'link',
            },
            {
              label: 'Sub-menu',
              value: 'subMenu',
            },
          ],
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'pageLink',
          type: 'text',
          admin: {
            condition: (_, { type } = {}) => type === 'link',
          },
        },
        {
          name: 'subMenu',
          label: false,
          type: 'group',
          admin: {
            condition: (_, { type } = {}) => type === 'subMenu',
          },
          fields: [
            {
              name: 'blocks',
              label: 'Menu Blocks',
              labels: {
                singular: 'Menu Block',
                plural: 'Menu Blocks',
              },
              type: 'blocks',
              blocks: [],
            },
          ],
        },
      ],
    },
  ],
};

export default MainMenu;