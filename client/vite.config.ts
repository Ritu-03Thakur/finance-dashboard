import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//npm i -D @types/node --> for path (../../../ instead of this use @ )
import path from 'path' ; 


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve :{
    alias : [{find : "@" , replacement : path.resolve(__dirname , "src")}]
  }
})
