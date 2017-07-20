import React from 'react'
import Checkbox from 'rc-checkbox'
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { Fetch } from '../../../../fetch'
const dataDetail = id => Fetch.getOneMainInstitution(id);
const columns = [{
  title: '总机构',
  dataIndex: 'all',
  render: (text, record) => <a href="#" onClick={dataDetail.bind(this, record.key)}>{text}</a>,
}, {
  title: '子机构数',
  dataIndex: 'atom',
}, {
  title: '机构简称',
  dataIndex: 'abbreviation',
}, {
  title: '机构类型',
  dataIndex: 'type',
}, {
  title: '机构总监',
  dataIndex: 'manager',
}, {
  title: '联系方式',
  dataIndex: 'phone',
}];
const dataSource = [{
  key: '1',
  all: '资产雷达',
  atom: '2',
  abbreviation: '雷达',
  type: '贷款公司',
  manager: '李磊',
  phone: '8276311261'
}, {
  key: '2',
  all: '资产雷达',
  atom: '1',
  abbreviation: '雷达',
  type: '贷款公司',
  manager: '李磊',
  phone: '8276311261'
}, {
  key: '3',
  all: '资产雷达',
  atom: '23',
  abbreviation: '雷达',
  type: '贷款公司',
  manager: '李为磊',
  phone: '8276311261'
}, {
  key: '4',
  all: '资产雷达',
  atom: '21',
  abbreviation: '雷达',
  type: '贷款公司',
  manager: '李磊人',
  phone: '8276311261'
}];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User',
  }),
};

class Default extends React.Component {
	constructor() {
		super();
		this.columns = columns;
		this.dataSource = dataSource;
		this.API = [];
		this.state = { columns, dataSource };
	}
	componentDidMount() {
		let { defaultData } = this.props;
	/*
	defaultData = {
		id: '984398jijfwbi',
		institution: '资产雷达',
		atomNumber: 2,
		abbreviation: '雷达',
		type: '贷款公司',
		manager: 'shuai',
		phone: '15274652882'
	}
	*/
//		this.columns = defaultData
		this.dataSource = defaultData.map((each, i) => {
			let { institution : all, atomNumber: atom, abbreviation, type, manager, phone, id: key } = each;
			return { key, all, atom, abbreviation, type, manager, phone };
		});
		let dataSource = this.dataSource, columns = this.columns;
		this.setState({ columns, dataSource });
	}
	render(){
		let { defaultData } = this.props;
		return (<div>
  		<Table rowSelection={ rowSelection } columns={ this.columns } dataSource={ this.dataSource } />
		</div>)
	}
}
export default Default