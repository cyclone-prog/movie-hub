import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import store from '@/store'
import { Provider } from 'react-redux'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    //By passing the store as the store prop to <Provider>, the Redux store is made available to all components within the application. This enables the components to access and update the state using the Redux store and its associated reducers and actions.
  )
}
