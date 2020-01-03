
import React, { Component } from 'react';
import {connect} from 'react-redux';


class RulingBox extends Component {

  render() {
    const rulings = [];
    if(!this.props.isFetching && this.props.rulings.length > 0) {
        this.props.rulings.map( (el, i) => {
            let total = parseInt(el.likes)+parseInt(el.unlikes);
            let like = Math.round((parseInt(el.likes) * 100) / total);
            let unlike = Math.round((parseInt(el.unlikes) * 100) / total);
            rulings.push(
                <div className="ruling" id={el.id}>
                    <img className="ruling__img" src={el.image} />
                    <img className="ruling__shadow" src={require('../../dist/img/shadow_box.png')} />
                    <div className="ruling__title">
                        {like > unlike ?
                            <div className="like">
                                <img src={require('../../dist/img/like.png')} />
                            </div>
                        :
                            <div className="unlike">
                                <img src={require('../../dist/img/unlike.png')} />
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
                        <div className="unlike" style={{ width: unlike+'%' }}>
                            <p>{unlike}%</p>
                            <img src={require('../../dist/img/unlike.png')} />
                        </div>
                    </div>
                </div>
            )
        });
    }
    return (
        <div id="rulingBox">
            {rulings}
        </div>
    );
  }
}

function mapStateToProps(state) {
    console.log(state)
    return {
      rulings: state.rulings.data,
      isFetching: state.rulings.isFetching
    }
  }
  
  
export default connect(mapStateToProps, null)(RulingBox)
