export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602ea06b9a87362d03eab677',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ju2hg8w9',
                  apiId: '8a9b5f0e-81c6-4bb7-95eb-00a8ebe5b8a7'
                },
                {
                  buildHookId: '602ea06bdcfe5658d9a31476',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-6y8rcikt',
                  apiId: 'ab180f6e-fdd3-4aa0-b489-e795a38128ef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fabiofabrizi/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-6y8rcikt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
