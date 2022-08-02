import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CsvdataService } from './csvdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  csvdatas:any = [];
  csvdata= {id:'',name:'',state:'',zip:'',qty:'',amount:'',item:''};
  
  editIndex=-1;
  csvdataName: any;
  error = '';
  success = '';
        
  constructor(private csvdataService: CsvdataService) {
  }
        
  ngOnInit() {
    this.getCsvdata();
  }

  addCsvData(f: any) {  

    if(this.editIndex==-1)
    {

      this.csvdataService.store(this.csvdata).subscribe(
        (res: any) => {
          // Update the list of cars
          this.csvdatas.push(res);
  
          // Inform the user
          this.success = 'Created successfully';
  
          // Reset the form
          f.reset();
        },
        (err) => (this.error = err.message)
      );
    }
    else
    {
     
      this.csvdataService.update(this.csvdata).subscribe(
        (res: any) => {
          // Update the list of cars
          this.csvdatas.push(res);
  
          // Inform the user
          this.success = 'Update successfully';
  
          // Reset the form
          f.reset();
        },
        (err) => (this.error = err.message)
      );
    }
   
};
        
  getCsvdata(): void {

    this.csvdataService.getAll().subscribe(
      (data: any) => {
        this.csvdatas = data;
        this.success = 'successful retrieval of the list';
      },
      (err) => {
        console.log(err);
        this.error = err;
      }
    );
  }
  deleteCsvData(id: number) {
   
    this.csvdataService.delete(id).subscribe(
      (res) => {
        this.csvdatas = this.csvdatas.filter(function (item:any) {
          return item['id'] && +item['id'] !== +id;
        });

        this.success = 'Deleted successfully';
      },
      (err) => (this.error = err)
    );
  }

  updateCsvData(item:any,index:any) {

    this.csvdata= {id:item.id,name:item.name,state:item.state,zip:item.zip,qty:item.zip,amount:item.amount,item:item.item};
    this.editIndex=index;
  
  }
}




