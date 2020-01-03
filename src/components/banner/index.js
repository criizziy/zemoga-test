import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actUpdateTrial} from '../../actions/content';
import {bindActionCreators} from 'redux';


class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            qualificated:true,
        };
        const { dispatch } = props
        this.boundActionCreators = bindActionCreators(actUpdateTrial, dispatch)
    }

    async SetQualification(type) {
        let data = this.props.trial;
        if(type == 'like')
            data.likes = parseInt(data.likes)+1
        else
            data.dislikes = parseInt(data.dislikes)+1
        
        data.qualificated = true;
        let { dispatch } = this.props
        let action = actUpdateTrial(this.props.trial.id, data);
        dispatch(action)
    }

    render() {

        const likes = this.props.trial ? parseInt(this.props.trial.likes) : 0;
        const dislikes = this.props.trial ? parseInt(this.props.trial.dislikes) : 0;
        let total = likes+dislikes;
        let like = Math.round((parseInt(likes) * 100) / total);
        let dislike = Math.round((parseInt(dislikes) * 100) / total);
        

        return (
            <div id="banner">
                {!this.props.isFetching && this.props.trial && (
                    <div className="container-fluid p-0">
                        <img className="banner" src={require('../../dist/img/image_test.jpg')} /*src={this.props.trial.image}*/ />

                        {!this.props.trial.qualificated?
                            <div>
                                <div className="opinion">
                                    <div className="opinion__wrapper">
                                        <div className="opinion__title">
                                            <p>What’s your opinion on</p>
                                            <h2>{this.props.trial.name}?</h2>
                                        </div>
                                        <p className="opinion__txt">{this.props.trial.opinion}</p>
                                        <div className="opinion__link">
                                            <img src={require('../../dist/img/wiki.png')} />
                                            <a href={this.props.trial.link} target="_blank">More information</a>
                                        </div>
                                        <h6>What’s Your Verdict?</h6>
                                    </div>
                                    <div className="opinion__qualification">
                                        <button onClick={ () => this.SetQualification('like')} className="like"><img src={require('../../dist/img/like.png')}/></button>
                                        <button onClick={ () => this.SetQualification('dislike')} className="dislike"><img src={require('../../dist/img/dislike.png')}/></button>
                                    </div>
                                </div>

                                <div className="closing">
                                    <p>Closing in</p>
                                    <div className="days">
                                        <strong>22</strong>
                                        <p>Days</p>
                                    </div>
                                </div>
                            </div>
                        : 
                            <div className="voted">
                                <div className="voted__wrapper">
                                    <h2 className="voted__title">Active Trial <strong>{this.props.trial.name}</strong></h2>
                                    <div className="voted__counted">
                                        <div>
                                            <img src={require('../../dist/img/like.png')}/>
                                        </div>
                                        <p>Your vote has been counted!</p>
                                    </div>
                                    <p className="voted__txt">Feeling like you’re not done yet? Go ahead and share your thoughts, or tell us what do you think should be {this.props.trial.name}’ Karmic Consequence</p>
                                    <button className="voted__btn">
                                        <img src={require('../../dist/img/write.png')}/>
                                        Write a Comment
                                    </button>
                                </div>
                                <div className="voted__qualification">
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
                        }
                    </div>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
      trial: state.activeTrial.data,
      isFetching: state.activeTrial.isFetching
    }
  }
  
  
export default connect(mapStateToProps, null)(Banner)
