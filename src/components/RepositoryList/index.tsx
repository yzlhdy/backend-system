import React from 'react';

import { connect } from 'react-redux'
import { ApplicationState } from '../../store';
import { Repository } from '../../store/users/repositories/types'

// import { Container } from './styles';
interface StateProps {
  repositories: Repository[]
}
const RepositoryList: React.FC<StateProps> = ({ repositories }) => {
  console.log(repositories);

  return (
    < div >
      {
        repositories.map(item => {
          return (
            <ul key={item.id}>
              <li>{item.name}</li>
            </ul>
          )
        })
      }
    </div >
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data

})
export default connect(mapStateToProps)(RepositoryList);