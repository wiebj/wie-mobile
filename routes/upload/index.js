/**
 * Created by yuehaitao on 2017/3/25.
 */
import React, {PropTypes} from 'react'
import { ImagePicker, WingBlank, WhiteSpace } from 'antd-mobile';
import styles from './index.less'

class Upload extends React.Component {
    constructor(props) {
        super(props)
        const data = [{
            url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
            id: '2121'
        }, {
            url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
            id: '2122'
        }];
        this.state = {
            files: data
        }
    }

    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files
        });
    }
    render() {
        const { files } = this.state;
        const dataSource=[{
            key: 1,
            name: 'lily',
            contribution: 33,
            ranking: 1
        },{
            key: 2,
            name: 'sunny',
            contribution: 28,
            ranking: 2
        },{
            key: 3,
            name: 'jack',
            contribution: 24,
            ranking: 3
        },{
            key: 4,
            name: 'lucy',
            contribution: 19,
            ranking: 4
        },{
            key: 5,
            name: 'tony',
            contribution: 17,
            ranking: 5
        }];
        return (
            <div>
                <WingBlank><div className="sub-title">请上传你的雾霾图片</div></WingBlank>
                <ImagePicker
                    files={files}
                    onChange={this.onChange}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={files.length < 5}
                    />
            </div>
        )
    }
}

export default Upload
