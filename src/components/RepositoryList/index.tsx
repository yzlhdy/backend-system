import React, { useEffect } from 'react';
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { ApplicationState } from '../../store';
import { Repository } from '../../store/users/repositories/types'
import * as RepositoriesActions from '../../store/users/repositories/actions'

// import { Container } from './styles';
interface StateProps {
  repositories: Repository[]
}

interface DispatchProps {
  loadRequest(): void
}


type Props = StateProps & DispatchProps


const RepositoryList: React.FC<Props> = (props) => {
  let { repositories, loadRequest } = props
  console.log(repositories);
  // console.log(loadRequest());
  useEffect(() => {
    loadRequest()
    return () => {

    }
  }, [])


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

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);