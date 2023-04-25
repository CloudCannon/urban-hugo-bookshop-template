module.exports = {
    _inputs: {
      title: {
        type: 'text',
        comment: 'The title of your page.'
      },
      author: {
        hidden: true
      },
      content_alignment: {
        type: 'select',
        options: {
          values: ['Left', 'Center', 'Right']
        }
      },
      component_theme: {
        type: 'select',
        options: {
          values: ['Light', 'Branded', 'Dark']
        }
      },
    _select_data: {
      categories: ['sales', 'tips', 'marketing', 'growth'],
      content_alignment: ['Left', 'Center', 'Right'],
      component_theme: ['Light', 'Branded', 'Dark']
    },
    paths: {
      data: 'data',
      collections: 'content',
      includes: 'layouts',
      layouts: 'layouts',
      static: 'static',
      uploads: 'static/uploads'
  },
    collections_config: {
      data: { 
        path: 'data',
        disable_add: true,
        disable_add_folder: true
      },
      clients: {
        path: 'content/clients',
        base_url: '/clients',
        'output': true,
        name: 'Clients',
        image_key: 'image_path',
        disable_add_folder: true,
        _enabled_editors: ['source']
      },
      pages: {
        path: 'content',
        url: '/',
        'output': true,
        name: 'Pages',
        icon: 'wysiwyg',
        _enabled_editors: ['visual', 'content']
      },
      'staff-members': {
        path: 'content/staff_members',
        _enabled_editors: ['data'],
        name: 'Staff Members',
        image_size: 'contain',
        text_key: 'name',
        icon: 'person',
        schema_key: '_my_schema_definition',
        disable_add_folder: true,
        disable_file_actions: true,
        schemas: {
          default: {
            name: 'Staff',
            path: 'schemas/staff-members/default.md',
            remove_extra_inputs: false,
            reorder_inputs: false,
            hide_extra_inputs: true
          },
          // authors: {
          //   name: 'New Author',
          //   icon: 'nature_people',
          //   path: 'schemas/staff-members/authors.md',
          //   text_key: 'name',
          //   subtext_key: 'bio',
          //   remove_extra_inputs: false,
          //   remove_empty_inputs: true,
          //   image_size: ''
          // }
        },
        sort: {
          key: 'name'
        },
        sort_options: [
          {
            key: 'name'
          },
          {
            key: 'name',
            order: 'desc'
          },
          {
            key: 'position',
            label: 'Job Title'
          }
        ]
      },
      blogs: {
        path: 'content/blog',
        'output': true,
        base_url: '/blog',
        name: 'Blog',
        add_options: [
          {
            name: 'Read the docs',
            icon: 'local_library',
            href: 'https://docs.cloudcannon.com'
          },
          {
            name: 'Add Post',
            editor: 'content',
            base_path: '/blog/drafts/'
          },
          {
            name: 'Add Author',
            editor: 'content',
            icon: 'person',
            collection: 'staff-members',
            schema: 'authors'
          }
        ],
        schemas: {
          default: {
            path: 'schemas/blogs/default.md'
          }
        }
      },
    },
    
    collection_groups: [
      {
        heading: 'Pages',
        collections: [
          'pages'
        ]
      },
      {
        heading: 'Blogging',
        collections: [
          'blogs',
          'drafts',
          'staff-members'
        ]
      },
      {
        heading: 'Content',
        collections: [
          'clients',
          'data'
        ]
      }
    ],
  }
};

  
