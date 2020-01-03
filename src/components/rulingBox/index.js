
import React, { Component } from 'react';
import {connect} from 'react-redux';


class RulingBox extends Component {

  render() {
    const trials = [];
    if(!this.props.isFetching && this.props.trials.length > 0) {
        this.props.trials.map( (el, i) => {
            let total = parseInt(el.likes)+parseInt(el.dislikes);
            let like = Math.round((parseInt(el.likes) * 100) / total);
            let dislike = Math.round((parseInt(el.dislikes) * 100) / total);
            trials.push(
                <div className="ruling" id={el.id}>
                    <img className="ruling__img" src={el.image} />
                    <img className="ruling__shadow" src={require('../../dist/img/shadow_box.png')} />
                    <div className="ruling__title">
                        {like > dislike ?
                            <div className="like">
                                <img src={require('../../dist/img/like.png')} />
                            </div>
                        :
                            <div className="dislike">
                                <img src={require('../../dist/img/dislike.png')} />
                            </div>
                        }
                        <h2>{el.name}</h2>
                    </div>
                    <p className="ruling__txt">
                            {el.opinion}
                        </p>
                    <button className="ruling__button">View Full Report</button>
                    <div className="ruling__qualification">
                        <div className="like" style={{ width: like+'%' }}>
                            <img src={require('../../dist/img/like.png')} />
                            <p>{like}%</p>
                        </div>
                        <div className="dislike" style={{ width: dislike+'%' }}>
                            <p>{dislike}%</p>
                            <img src={require('../../dist/img/dislike.png')} />
                        </div>
                    </div>
                </div>
            )
        });
    }
    return (
        <div id="rulingBox">
            {trials}
        </div>
    );
  }
}

function mapStateToProps(state) {
    console.log(state)
    return {
      trials: state.trials.data,
      isFetching: state.trials.isFetching
    }
  }
  
  
export default connect(mapStateToProps, null)(RulingBox)
