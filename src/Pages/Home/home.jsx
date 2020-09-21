import React, {Component} from "react";
import {Link} from "react-router-dom";
import './hstyle.scss';
import $ from 'jquery';

 class Home extends Component{

  render(){
      return(

        <div className="container">
        <div className="row">
          <div className="col-md-10 offset-sm-1" id="logout">
            <div className="page-header">
              <h3 className="reviews">Leave comment</h3>
              <div className="logout">
                <button className="btn btn-secondary btn-circle text-uppercase" type="button" onclick="$('#logout').hide(); $('#login').show()"> <span className="glyphicon glyphicon-off" /> Logout</button>
              </div>
            </div>
            <hr />
            <div className="comment-tabs">
              <ul className="nav nav-tabs" role="tablist">
                <li className="active nav-item"><a href="#comments-logout" role="tab" data-toggle="tab" className="nav-link"><h4 className="reviews text-capitalize">Comments</h4></a>
                </li>
                <li className="nav-item"><a href="#add-comment" role="tab" data-toggle="tab" className="nav-link"><h4 className="reviews text-capitalize">Add comment</h4></a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="comments-logout">
                  <ul className="media-list">
                    <li className="media"> <a className="float-left" href="#">
                        <img className="media-object rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/dancounsell/128.jpg" alt="profile" />
                      </a>
                      <div className="media-body">
                        <div className="card bg-light card-body mb-3 well-lg">
                          <h4 className="media-heading text-uppercase reviews">Marco </h4>
                          <ul className="media-date text-uppercase reviews list-inline">
                            <li className="dd list-inline-item">22</li>
                            <li className="mm list-inline-item">03</li>
                            <li className="aaaa list-inline-item">2020</li>
                          </ul>
                          <p className="media-comment">Great! Thanks for sharing.</p> <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt" /> Reply</a>
                          <a className="btn btn-warning btn-circle text-uppercase" data-toggle="collapse" href="#replyOne"><span className="glyphicon glyphicon-comment" /> comment</a>
                        </div>
                      </div>
                      <div className="collapse" id="replyOne">
                        <ul className="media-list">
                          <li className="media media-replied"> <a className="float-left" href="#">
                              <img className="media-object rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/ManikRathee/128.jpg" alt="profile" />
                            </a>
                            <div className="media-body">
                              <div className="card bg-light card-body mb-3 well-lg">
                                <h4 className="media-heading text-uppercase reviews"><span className="glyphicon glyphicon-share-alt" /> The Hipster</h4>
                                <ul className="media-date text-uppercase reviews list-inline">
                                  <li className="dd list-inline-item">06</li>
                                  <li className="mm list-inline-item">04</li>
                                  <li className="aaaa list-inline-item">2020</li>
                                </ul>
                                <p className="media-comment">Nice job Maria.</p> <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt" /> Reply</a>
                              </div>
                            </div>
                          </li>
                          <li className="media media-replied" id="replied"> <a className="float-left" href="#">
                              <img className="media-object rounded-circle" src="https://pbs.twimg.com/profile_images/442656111636668417/Q_9oP8iZ.jpeg" alt="profile" />
                            </a>
                            <div className="media-body">
                              <div className="card bg-light card-body mb-3 well-lg">
                                <h4 className="media-heading text-uppercase reviews"><span className="glyphicon glyphicon-share-alt" /> Mary</h4>
                                <ul className="media-date text-uppercase reviews list-inline">
                                  <li className="dd list-inline-item">01</li>
                                  <li className="mm list-inline-item">06</li>
                                  <li className="aaaa list-inline-item">2020</li>
                                </ul>
                                <p className="media-comment">Thank you Guys!</p> <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt" /> Reply</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="media"> <a className="float-left" href="#">
                        <img className="media-object rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/kurafire/128.jpg" alt="profile" />
                      </a>
                      <div className="media-body">
                        <div className="card bg-light card-body mb-3 well-lg">
                          <h4 className="media-heading text-uppercase reviews">Nico</h4>
                          <ul className="media-date text-uppercase reviews list-inline">
                            <li className="dd list-inline-item">22</li>
                            <li className="mm list-inline-item">06</li>
                            <li className="aaaa list-inline-item">2020</li>
                          </ul>
                          <p className="media-comment">I'm looking for that. Thanks!</p>
                          <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="//www.youtube.com/embed/80lNjkcp6gI" allowFullScreen />
                          </div> <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt" /> Reply</a>
                        </div>
                      </div>
                    </li>
                    <li className="media"> <a className="float-left" href="#">
                        <img className="media-object rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/lady_katherine/128.jpg" alt="profile" />
                      </a>
                      <div className="media-body">
                        <div className="card bg-light card-body mb-3 well-lg">
                          <h4 className="media-heading text-uppercase reviews">Kriztine</h4>
                          <ul className="media-date text-uppercase reviews list-inline">
                            <li className="dd list-inline-item">28</li>
                            <li className="mm list-inline-item">06</li>
                            <li className="aaaa list-inline-item">2020</li>
                          </ul>
                          <p className="media-comment">Yehhhh... Thanks for sharing.</p> <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt" /> Reply</a>
                          <a className="btn btn-warning btn-circle text-uppercase" data-toggle="collapse" href="#replyTwo"><span className="glyphicon glyphicon-comment" /> 1 comment</a>
                        </div>
                      </div>
                      <div className="collapse" id="replyTwo">
                        <ul className="media-list">
                          <li className="media media-replied"> <a className="float-left" href="#">
                              <img className="media-object rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/jackiesaik/128.jpg" alt="profile" />
                            </a>
                            <div className="media-body">
                              <div className="card bg-light card-body mb-3 well-lg">
                                <h4 className="media-heading text-uppercase reviews"><span className="glyphicon glyphicon-share-alt" /> Lizz</h4>
                                <ul className="media-date text-uppercase reviews list-inline">
                                  <li className="dd list-inline-item">22</li>
                                  <li className="mm list-inline-item">09</li>
                                  <li className="aaaa list-inline-item">2014</li>
                                </ul>
                                <p className="media-comment">Classy!</p> <a className="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span className="glyphicon glyphicon-share-alt" /> Reply</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tab-pane" id="add-comment">
                  <form action="#" method="post" className id="commentForm" role="form">
                    <div className="form-group">
                      <label htmlFor="email" className="col-md-2 col-form-label">Comment</label>
                      <div className="col-md-10">
                        <textarea className="form-control" name="addComment" id="addComment" rows={5} defaultValue={""} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="uploadMedia" className="col-md-2 col-form-label">Upload media</label>
                      <div className="col-md-10">
                        <div className="input-group">
                          <div className="input-group-addon">http://</div>
                          <input type="text" className="form-control" name="uploadMedia" id="uploadMedia" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                 <div className="col-sm-offset-2 col-sm-10">                    
                <button className="btn btn-success btn-circle text-uppercase" type="submit" id="submitComment"><span className="glyphicon glyphicon-send" /> Summit comment</button>
               </div>
               </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 

                        
                       
                        
      );
  }
}
export default Home;

