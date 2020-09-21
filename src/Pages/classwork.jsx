import React, { Component } from 'react';
import * as AiIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaFolderOpen } from "react-icons/fa";
import * as IoIcons from 'react-icons/io';
import Calendar from './calendar';
import './classtyle.scss';


class Classwork extends Component {
      render(){
        return(
            <>
            <Link to="" className="drivefolder">
            <FaFolderOpen/>
            <span>class Drive folder</span>
            </Link>
            <Link to="" className="calendar">
            <IoIcons.IoIosCalendar />
            <span>Calendar</span>
            </Link>

            <div className="wrapper">
        <div className="title">
          Worksheet
        </div>
        <div className="file_upload_list">
          <ul>
            <li>
              <div className="file_item">
                <div className="format">
                  <p>PNG</p>
                </div>
                <div className="file_progress">
                  <div className="file_info">
                    <div className="file_name">
                      Nature.png
                    </div>
                    <div className="file_size_wrap">
                      <div className="file_size">2KB</div>
                      <div className="file_close">X</div>
                    </div>
                  </div>
                  <div className="progress">
                    <div className="inner_progress" style={{width: '90%'}} />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="file_item">
                <div className="format">
                  <p>JPEG</p>
                </div>
                <div className="file_progress">
                  <div className="file_info">
                    <div className="file_name">
                      Place.jpeg
                    </div>
                    <div className="file_size_wrap">
                      <div className="file_size">6.2KB</div>
                      <div className="file_close">X</div>
                    </div>
                  </div>
                  <div className="progress">
                    <div className="inner_progress" style={{width: '73%'}} />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="file_item">
                <div className="format">
                  <p>PSD</p>
                </div>
                <div className="file_progress">
                  <div className="file_info">
                    <div className="file_name">
                      Website.psd
                    </div>
                    <div className="file_size_wrap">
                      <div className="file_size">15MB</div>
                      <div className="file_close">X</div>
                    </div>
                  </div>
                  <div className="progress">
                    <div className="inner_progress" style={{width: '66%'}} />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="file_item">
                <div className="format">
                  <p>DOC</p>
                </div>
                <div className="file_progress">
                  <div className="file_info">
                    <div className="file_name">
                      Studentslist.doc
                    </div>
                    <div className="file_size_wrap">
                      <div className="file_size">10MB</div>
                      <div className="file_close">X</div>
                    </div>
                  </div>
                  <div className="progress">
                    <div className="inner_progress" style={{width: '50%'}} />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="file_item">
                <div className="format">
                  <p>ZIP</p>
                </div>
                <div className="file_progress">
                  <div className="file_info">
                    <div className="file_name">
                      Personal_files.zip
                    </div>
                    <div className="file_size_wrap">
                      <div className="file_size">200KB</div>
                      <div className="file_close">X</div>
                    </div>
                  </div>
                  <div className="progress">
                    <div className="inner_progress" style={{width: '25%'}} />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="choose_file">
          <label htmlFor="choose_file">
            <input type="file" id="choose_file" />
            <span>Choose Files</span>
          </label>
        </div>
      </div>
      
     </>
        );
    }
}


export default Classwork;


