import  {movies} from "../mock_data/movies.js"
export const data = new webix.DataCollection();
	//NOTE that the async 'data.waitData' is applied in the view
	console.log("This is a lazy loading data collection") 
	data.parse(movies.data, 'json');

//		BELOW IS AS SHOWN IN DOCS
//			Above is prefered because it makes explicit the
//			Fetching of data from an external source
// data.parse([
// 	{
// 		id:1, title:"The Shawshank Redemption",
// 		year:1994, votes:678790, rating:9.2, rank:1},
// 	{
// 		id:2, title:"The Godfather",
// 		year:1972, votes:511495, rating:9.2, rank:2},
// 	{
// 		id:3, title:"The Godfather: Part II",
// 		year:1974, votes:319352, rating:9.0, rank:3},
// 	{
// 		id:4, title:"The Good, the Bad and the Ugly",
// 		year:1966, votes:213030, rating:8.9, rank:4},
// 	{
// 		id:5, title:"My Fair Lady",
// 		year:1964, votes:533848, rating:8.9, rank:5},
// 	{
// 		id:6, title:"12 Angry Men",
// 		year:1957, votes:164558, rating:8.9, rank:6}
// ], "json");
