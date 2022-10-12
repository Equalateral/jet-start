import {data} from "models/records";
import {JetView} from "webix-jet";


export default class DataView extends JetView{
	config(){
		return { view:"datatable", autoConfig:true };
	}
	init(view){
		view.sync(data);
		data.waitData.then(() => {
			view.select(view.getFirstId());
		});
	}
	//  BELOW is syncronous only, from previous example
	// init(view){
	// 	view.parse(data);
	// 	const table = view as webix.ui.datatable;
	// 	table.add({});
	// }
}
