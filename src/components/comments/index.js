import React, { Component } from 'react';
import {connect} from 'react-redux';


class Comments extends Component {

    render() {  
        const items = [];
        if(!this.props.isFetching && this.props.comments) {
            console.log(this.props.comments);
            this.props.comments.map( (el, i) => {

                let color = '#ca6fc3';
                let icon = require('../../dist/img/karma.png')
                if(el.qualification === 'like' && !el.karma){
                    color = '#1cbbb4';
                    icon = require('../../dist/img/like.png');
                }
                else if(el.qualification === 'dislike' && !el.karma){
                    color = '#ffad1d';
                    icon = require('../../dist/img/dislike.png')
                }

                
                items.push(
                    <div className="comment" id={el.id}>
                        <div className="comment__head" style={{backgroundColor:color}}>
                            <div className="comment__title">
                                <h2>{el.name}</h2>
                                <p>2 weeks ago</p>
                            </div>
                            <img src={icon} />
                        </div>
                        <div className="comment__body">
                            <p>{el.comment}</p>
                        </div>
                    </div>
                );

            });
        }      
        return (
            <div id="comments">
                {!this.props.isFetching && this.props.trial && (
                    <div className="filters">
                        <h2 className="filters__title">What People Are Saying About <strong>{this.props.trial.name}</strong></h2>
                        <ul className="filters__options">
                            <li>View:</li>
                            <li><button className="all">ALL</button></li>
                            <li>
                                <button 
                                    className="like"
                                >
                                    <img src={require('../../dist/img/like_color.png')} />
                                    Comments
                                </button>
                            </li>
                            <li>
                                <button 
                                    className="dislike"
                                >
                                    <img src={require('../../dist/img/dislike_color.png')} />
                                    Comments
                                </button>
                            </li>
                            <li>
                                <button 
                                    className="karma"
                                >
                                    <img src={require('../../dist/img/karma_color.png')} />
                                    Karma
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
                {items}
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
      comments: state.activeTrial.data.comments,
      trial: state.activeTrial.data,
      isFetching: state.trials.isFetching
    }
  }
  
  
export default connect(mapStateToProps, null)(Comments)
