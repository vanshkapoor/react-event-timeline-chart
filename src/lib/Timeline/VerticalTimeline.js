import React from "react";
import "./timelinegraph.css"

const VerticalTimeline = ({ data }) => {
    return data && <div className="mt-4">
        <div className="container">
            <div className="timechart">
                <p className="text-center text-secondary">start</p>
                <div className="timeline_main timeline_main_start">
                    <div className="timeline_start_chartbox">
                    </div>
                </div>
                {
                    data.timeline.map((data, key) => {
                        if (data.subdata == undefined) {
                            return (<div className="timeline_main">
                                <div className="timeline_chartbox">
                                    <p className="timeline_date">{data.time}</p>
                                    <h4 className="timeline_header">{data.title}</h4>
                                    <p className="text-secondary">{data.subtext}</p>
                                    {
                                        data.link.map((link, key) => {
                                            return <p className="p-0 mb-0"><a href={`${link.url}`}>{link.urltext}</a></p>
                                        })
                                    }
                                </div>
                            </div>
                            )
                        }
                        else {
                            return <div className="timeline_main">
                                <div className="row timeline_chartbox_left">
                                    <div className="col-9">
                                        <div className="timeline_chartbox">
                                            <p className="timeline_date">{data.time}</p>
                                            <h4 className="timeline_header">{data.title}</h4>
                                            <p className="text-secondary">{data.subtext}</p>
                                            {
                                                data.link.map((link, key) => {
                                                    return <p className="p-0 mb-0"><a href={`${link.url}`}>{link.urltext}</a></p>
                                                })
                                            }
                                        </div></div>
                                    <div className="col-3 p-0">
                                        {data.subdata.map((obj, key) => {
                                            return <div className="timeline_sub_chartbox ">
                                                <p className="mb-0">{obj.text} </p>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>
                        }
                    })
                }
            </div>
        </div>
    </div>
}

export default VerticalTimeline;