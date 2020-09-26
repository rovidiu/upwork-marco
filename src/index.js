import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, updateIntl } from 'react-intl-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import NotificationsContainer from './components/notifications'
import router from './routes/router'
import browserHistory from './history'
import languages from './languages'

import 'bootstrap/dist/css/bootstrap.min.css';

const locale = 'en'

store.dispatch(updateIntl({
  locale,
  messages: languages[locale],
}))

class App extends React.Component {
  componentDidMount(){
  }
  
  render() {
    return (
      <Provider
        store={store}
      >
        <PersistGate loading={null} persistor={persistor}>
          <div>
            <NotificationsContainer />
            {router(browserHistory)}
          </div>
        </PersistGate>
      </Provider>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
