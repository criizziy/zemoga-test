import React, { Component } from 'react';
import {actGetRulings} from '../../actions/content';
import {connect} from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    async componentDidMount() {
        await this.props.actGetRulings();
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>

                    <div className='col-12'>
                        header
                    </div>
                    <div className='col-12'>
                        content
                    </div>
                    <div className='col-12'>
                        footer
                    </div>

                </div>
            </div>
        );
  }
}

function mapStateToProps(state) {
    console.log(state)
    return {
      user: state.login.user,
      isFetching: state.login.isFetching,
    }
  }
  
function mapDispatchToProps(dispatch) {
    return {
        actGetRulings: () => {
            dispatch(actNextTurn(dispatch))
        },
        actCompleateTurn: () => {
            dispatch(actCompleateTurn(dispatch))
        },
        actGetTurn: () => {
            dispatch(actGetTurn(dispatch))
        },
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Home)
//export default connect(null, null)(Home);

