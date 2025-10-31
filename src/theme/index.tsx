import React from 'react'
import { ConfigProvider } from 'antd'

function ThemeProvider({children} :{children: React.ReactNode}) {
    const primaryColorCode = '#000'
  return (
    <ConfigProvider theme={{
        token:{colorPrimary:primaryColorCode,
            controlOutline:'none'
        },
        components: {
            Button: {
                controlHeight: 45
            }
        }
    }}>
        {children}
    </ConfigProvider>
  )
}

export default ThemeProvider