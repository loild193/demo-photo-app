import { Route, Switch, useRouteMatch } from 'react-router-dom'
import AddEditPage from './pages/AddEdit';
import MainPage from './pages/Main';
import NotFound from 'components/NotFound';

function Photo(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />
      
      <Route path={`${match.url}/add`} component={AddEditPage} />
      <Route path={`${match.url}/:photoId`} component={AddEditPage} />
    
      <Route component={NotFound} />
    </Switch>
  )
}

Photo.propTypes = {}

export default Photo

