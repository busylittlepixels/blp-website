const people = [
    {
      name: 'Paddy Ryan',
      role: 'Co-Founder & CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
      twitterUrl: '#',
      linkedinUrl: '#',
      location: 'Dublin, Ireland'
    },
    {
        name: 'Michaelangelo Fantastico',
        role: 'Co-Founder & CTO',
        imageUrl:
          'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
        twitterUrl: '#',
        linkedinUrl: '#',
        location: 'Dublin, Ireland'
      },
      {
        name: 'Marieke Van Der Nietreale',
        role: 'Head of Brand',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
        twitterUrl: '#',
        linkedinUrl: '#',
        location: 'Amsterdam, The Netherlands'
      }
    // More people...
  ]
  

  
  export const Team = () => {
    return ( 
      <div className="bg-black py-24 sm:py-32 overflow-hidden w-full">
        <div className="hidden md:block relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
            <svg className="absolute left-full transform" width="400" height="384" fill="none" viewBox="0 0 400 384">
                <defs>
                <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
                </defs>
                <rect width="400" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl uppercase mb-4">MEET THE <span style={{ "color": "red"}}>TEAM...</span></h1>
            <div className="header__underline"></div>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3 relative z-10"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{person.name}</h3>
                <p className="text-base leading-7 text-gray-300">{person.role}</p>
                <p className="text-sm leading-6 text-gray-500">{person.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  