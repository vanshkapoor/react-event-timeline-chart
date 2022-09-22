# React-timeline-event-chart
A more developer friendly timeline chart visual.

Now, easily develop a responsive timeline graph with better UI designs and linking feature at components for easy user navigation in app.
Devs can pass a simple json to build the timeline chart.

![Screenshot 2022-09-22 091145](https://user-images.githubusercontent.com/31445077/191653448-02083638-930e-461d-8690-27ec6eb849e8.png)

<hr />

## Installation step

```sh
npm i react-event-timeline-chart
```

## How to use

* step 1: Create a sample json to send

```sh
export const data =[
{
        "timeline": [
            {
                "title": "Starter",
                "subtext": "Understanding basics of internet",
                "time": "1 week",
                "link": [
                ]
            },
            {
                "title": "Basic Frontend Development",
                "subtext": "A core on how to develop website UI that we see everyday",
                "time": "2-3 weeks",
                "link": [
                    {
                        "urltext": 'Start learning',
                        "url": '#'
                    },
                    {
                        "urltext": 'Explore in depth',
                        "url": '#'
                    }
                ],
                "subdata": [
                    {
                        "text": 'HTML'
                    }, {
                        "text": 'CSS'
                    }
                ]
            },
            {
                "title": "Database Development",
                "subtext": "Understanding how database works and using SQL",
                "time": "3-4 weeks",
                "link": [
                    {
                        "urltext": 'Start learning',
                        "url": '#'
                    },
                    {
                        "urltext": 'Explore in depth',
                        "url": '#'
                    }
                ],
                "subdata": [
                    {
                        "text": 'DBMS'
                    }, {
                        "text": 'SQL'
                    }
                ]
            }
        ]
    }
]  
```

* step 2: Call the component

```sh
import {VerticalTimeline} from "react-event-timeline-chart"
import data from "./json"

<VerticalTimeline data={data[0]}>
```

The project is open for new devs to start their open source journey!
