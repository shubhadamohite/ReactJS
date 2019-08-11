import React from "react"
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
//import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
//import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'; //mimics a sheet of paper
import 'typeface-roboto';
//import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
//import { ThemeProvider } from '@material-ui/styles';
//import Typography from '@material-ui/core/Typography';
//import Fab from '@material-ui/core/Fab';
//import './index.css'
//import IconButton from '@material-ui/core/IconButton';
//import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
//import oredrBy from 'lodash/orderBy';
import Button from '@material-ui/core/Button';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
//import rowsPerPage from '@material-ui/core/rowsPerPage';

//import rows from '@material-ui/core/rows';


    
    const api_url = '';
    


    const styles = theme => ({
        root: {
        width: '100%',
        marginTop: 8*2,
        overflowX: 'auto',
        background: 'linear-gradient(45deg, #a5c8ff 20%, #b3bfd1  90%)',
        },
        
        table: {
        
            fontSize: 20,
            fontFamily: 'monospace',
            color: 'darkslateblue',
        }, 
        
        absolute:{
            
            //spacing..

      }, searchbar:{
          
            //spacing..


      },
        head:{
          
          color: 'black',
          fontSize: 23,
      },
        container1: {
        
        display: 'flex',
        flexWrap: 'wrap',
            paddingLeft:1000,
        
        }, 
        container2: {
        
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft:1000,
        },
        
        
      textField: {

            spacing: 1,
           
            width: 200,
      },
        But:{
            
            backgroundColor: 'blue',
        }
        
    })  ;


   
    class App extends React.Component{
    
    constructor(props){
        
        super(props);
        
        this.state={
            tableData: [{}],
            
            direction:{
                
                header: 'asc',
            }
              
        };
        
        this.handleSort = this.handleSort.bind(this); 
        this.changeCurrentPage = currentPage => this.setState({ currentPage });
        this.changePageSize = pageSize => this.setState({ pageSize });
      
    }
    

    componentDidMount(){
         
        axios.get(api_url,{
                responseType: 'json'
            }).then(response => {
                this.setState({ tableData: response.data });
            });
    }
        
        
        
     handleSort(key){
        
            
        //ascending/descending function toggle 
         
            this.setState(prev =>{
                return{
                    
                    [key]: !prev[key],
                    tableData: prev.tableData.sort((a,b) => prev[key] ? a[key]  < b[key] : a[key] > b[key]  )        
                }
                

                
            });
            
      
    };
        
        
      
    handleChangePage(event, newPage) {
        const setPage = React.useState(0);  
    setPage(newPage);  //setPage calls a hook function 
  }
        

 
    render(){
        
        
                    
    const  {classes}  = this.props;
    const header = Object.keys(this.state.tableData[0]);   //this has the keys to print headers for the table   
    const head = header.map((header) => 
                            < TableCell component="th" scope="row">
    <Button className="But" onClick={()=> this.handleSort(header)} > {header} </Button>
                            </TableCell>); 

    
    
   

                         
//    const size_head = head.length;
                            
    var cells=[];     
                           
                    
            cells = this.state.tableData.map((tableData)=>(
                     
                    
                        <TableRow >
                        
                            <TableCell>{tableData[header[0]]}</TableCell>
                            <TableCell>{tableData[header[1]]}</TableCell>
                            <TableCell>{tableData[header[2]]}</TableCell>
                            <TableCell>{tableData[header[3]]}</TableCell>
                            <TableCell>{tableData[header[4]]}</TableCell>
                            <TableCell>{tableData[header[5]]}</TableCell>
                            <TableCell>{tableData[header[6]]}</TableCell>
                            <TableCell>{tableData[header[7]]}</TableCell>    
                            <TableCell>{tableData[header[8]]}</TableCell>
                            <TableCell>{tableData[header[9]]}</TableCell>
                            <TableCell>{tableData[header[10]]}</TableCell>
                            <TableCell>{tableData[header[11]]}</TableCell>
                            <TableCell>{tableData[header[12]]}</TableCell>
                            <TableCell>{tableData[header[13]]}</TableCell>
                            <TableCell>{tableData[header[14]]}</TableCell>
                            <TableCell>{tableData[header[15]]}</TableCell>
                            <TableCell>{tableData[header[16]]}</TableCell>
                      
                        </TableRow >
                    ))
            
                 
     return (
         
         
        <div className= "cont">
         Search Table's Contents <input type="search"></input>
            <form className = { classes.container1 } noValidate>
         
            <TextField

                id="date"
                label="Start Date"
                type="date"
                defaultValue="2017-05-24"
                className={ classes.textField }
                InputLabelProps={{
                  shrink: true,
                }}
             />
            </form>
         
         
            <form className={ classes.container2 } noValidate>
              <TextField
                id="date"
                label="End Date"
                type="date"
                defaultValue="2017-08-26"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>

        <Paper className = { classes.root }>
         
        
            <Table className = { classes.table }>  
         
                <TableRow>{ head }</TableRow>
           
                   {cells }
               
            </Table>
         
         <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={3}
//                count={rows.length}
//                rowsPerPage={rowsPerPage}
//                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'Rows per page' },
                  native: true,
                }}
//                onChangePage={handleChangePage} 
//                onChangeRowsPerPage={handleChangeRowsPerPage}
//                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
         
         
        </Paper>
       
         
    </div>
         
      

        )
    }
}   

App.propTypes = {
  classes: PropTypes.object.isRequired, //gives a warning if the props isn't provided 
};

export default withStyles(styles)(App);


//  tableData: prev.tableData.sort((a,b) => prev[key] ? parseFloat(a[key])  < parseFloat(b[key]) : parseFloat(a[key]) > parseFloat(b[key])  )   

//                tableData: this.state.tableData.sort((a,b) => a[key] < b[key]),

//const head = header.map((header) => <TableCell component="th" scope="row" >{header}</TableCell>);     


//--> filtering and editiong of table 
//https://community.devexpress.com/blogs/oliver/archive/2017/10/18/react-data-grid-for-google-material-design.aspx

//https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/filtering/
