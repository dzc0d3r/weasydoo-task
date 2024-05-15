import React from 'react'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import Image from "next/image"

const config: DocsThemeConfig = {
  logo: <p style={{fontSize: 24, display: 'flex', alignItems: 'center', gap: 8}}><Image alt="logo" height={40} src="/logo.png" width={40}/>FakeStore</p>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'FakeStore Docs',
  },
}

export default config
