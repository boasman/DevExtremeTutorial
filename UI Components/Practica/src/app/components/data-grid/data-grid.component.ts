import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { Employee, EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [
    DxDataGridModule
  ],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.css'
})
export class DataGridComponent {

  employees : Employee[] = [];

  constructor(service: EmployeeService){
    this.employees = service.getEmployees();
  }
}
