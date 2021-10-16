
//server host name
const HOST = "localhost";

//remote database name
const DATABASE = "himalaya";

//database credentials
const USERNAME = "himalaya";
const PASSWORD = "himalaya";

//default app port
const PORT = 3555;

//default connection url
const DEFAULT_CONNECTION_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.bhghk.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;
// const DEFAULT_CONNECTION_STRING =  mongodb+srv://himalaya:<password>@cluster0.bhghk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// //mongoose options for connection
const MONGOOSE_OPTIONS = {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true,
    useNewUrlParser:true
}

module.exports = {HOST, PORT, DATABASE, USERNAME, PASSWORD, DEFAULT_CONNECTION_STRING, MONGOOSE_OPTIONS}