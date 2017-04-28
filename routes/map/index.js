/**
 * Created by yuehaitao on 2017/3/25.
 */
import React, {PropTypes} from 'react';
import { Icon } from 'antd-mobile';
import styles from'./index.less'
class Map extends React.Component {


    constructor(props) {
        super(props);
        this.props = props;
        //this.state = {
        //    test: 'test',
        //    a: 'a'
        //}
    }
    //changeVar = () => {
    //    this.setState({
    //        a: 'b'
    //    })
    //}
    //onClick={this.changeVar}
    componentDidMount() {
        var map = new AMap.Map('mapDiv', {
            resizeEnable: true,
            center:[116.519942, 39.924677],
            zoom:18
        });
        map.on('indoor_create',function(){
            map.indoorMap.showIndoorMap('B000A856LJ',5);
        });
        AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'],function(){

            var tipInput = document.getElementById("tipinput");
            var autoOptions = {
                city: '',
                input:'tipinput'
            };
            var autoComplete= new AMap.Autocomplete(autoOptions);
            var placeSearch = new AMap.PlaceSearch({
                city:'北京',
                map:map
            });
            autoComplete.search(tipInput.value);
            AMap.event.addListener(autoComplete, "select", function(e){
                placeSearch.setCity(e.poi.adcode);
                placeSearch.search(e.poi.name);
            });
        });
    }

    render() {
        //const {a, test} = this.state;
        return (
            <div id="mapDiv" style={{height:'1200px'}}>
                <div id="tip">
                    <Icon type="search" size='md' className='mapSearch'/>
                    <input type="text" id="tipinput"  />
                </div>
            </div>
        )
    }
}

export default Map
