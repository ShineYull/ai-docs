export default {
    title: 'AI创作',
    description: 'Just playing around.',
    head:[
        ['link', { rel: 'icon', href: '/ai.webp' }]
    ],
    lastUpdated: true,
    themeConfig: {
        siteTitle: "AI创作",  //左上角的
        logo: "/ai.webp",      //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
        nav: [                  //右上角的导航栏
          {
            text: "神经网络",             //导航标签的名字
            items: [                  //这种格式是有下拉菜单的版本
              { text: "CNN网络", link: "/articles/basic/index" },      //text代表每一项的名字，link是连接的位置
              { text: "RNN网络", link: "/articles/vue/index" },
              { text: "GAN网络", link: "/articles/vue/index" },
            ],
          },
          { text: "机器学习", link: "/articles/basic/index" },   //这种是没有下拉菜单的版本
        ],
        algolia: {
            appId: '...',
            apiKey: '...',
            indexName: '...'
        },
        socialLinks: [{ icon: "github", link: "https://github.com/ShineYull/ai-docs" }],       //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
        sidebar: {
            "/Stable-Siffusion-Webui/": [
                {
                    text: "简介",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "认识 Stable Siffusion Webui", link: "/Stable-Siffusion-Webui/getting-started" },
                    ],
                },
                {
                    text: "安装",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "本地部署", link: "/Stable-Siffusion-Webui/install" },
                    ],
                },
                {
                    text: "使用",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "文字生成图片", link: "/Stable-Siffusion-Webui/txt2img" },
                        { text: "lora模型使用", link: "/Stable-Siffusion-Webui/lora" },
                        { text: "图片生成图片", link: "/Stable-Siffusion-Webui/img2img" },
                    ],
                },
                {
                    text: "解决问题",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "生成的图片模糊灰暗", link: "/Stable-Siffusion-Webui/image-generation-problem" },
                    ],
                },
                {
                    text: "扩展",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "ControlNet", link: "/Stable-Siffusion-Webui/controlnet" },
                        { text: "Mov2mov", link: "/Stable-Siffusion-Webui/mov2mov" },
                    ],
                },
            ],
            "/Wenet/": [
                {
                    text: "简介",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "认识 Wenet", link: "/Wenet/getting-started" },
                    ],
                },
                {
                    text: "安装",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "拉取项目", link: "/Wenet/install" },
                    ],
                },
            ],
            "/about-ai/": [
                {
                    text: "关于AI创作",    //标签名字
                    collapsible: true,    //是不是可以动态展开
                    collapsed: false,      //默认是不是展开
                    items: [              //孩子
                        { text: "企鹅群", link: "/about-ai/about-ai.md" },
                    ],
                },
            ],
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright ©2023 By <a href="https://github.com/shineyull">Shine</a>'
        },
        editLink: {
            pattern: 'https://github.com/ShineYull/ai-docs/issues',
            text: '欢迎提issues'
        },
    },
}
