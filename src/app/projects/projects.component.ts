import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';

import {
  Projects,
  Tools,
  Language,
  Database,
  Framework,
} from '../api/projects';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  project: Projects[];
  byTools: Projects[];
  byLanguage: Projects[];
  byDatabase: Projects[];
  byFramework: Projects[];
  tools: Tools[];
  language: Language[];
  database: Database[];
  framework: Framework[];
  // Selected in html
  selectedLanguage: string = '';
  selectedTool: string = '';
  selectedDatabase: string = '1';
  selectedFramework: string = '5';

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.getAllDatabases();
    this.getAllFrameworks();
    this.getAllProjects();
    this.getAllTools();
    this.getAlllanguages();
    this.projectsByDatabase();
    this.projectsByFramework();
    this.projectsByLanguage();
    this.projectsByTools();
  }
  getAllProjects() {
    this.httpClient
      .get<any>(environment.allProjectsApi)
      .subscribe((response) => {
        this.project = response;
      });
  }
  getAllTools() {
    this.httpClient.get<any>(environment.allTools).subscribe((response) => {
      this.tools = response;
    });
  }
  getAlllanguages() {
    this.httpClient.get<any>(environment.allLanguage).subscribe((response) => {
      this.language = response;
    });
  }
  getAllDatabases() {
    this.httpClient.get<any>(environment.allDb).subscribe((response) => {
      this.database = response;
    });
  }
  getAllFrameworks() {
    this.httpClient.get<any>(environment.allFramework).subscribe((response) => {
      this.framework = response;
    });
  }

  projectsByDatabase() {
    this.httpClient
      .get<any>(environment.projectsByDb + this.selectedDatabase)
      .subscribe((response) => {
        this.byDatabase = response;
      });
    console.log(this.selectedDatabase);
  }

  projectsByFramework() {
    this.httpClient
      .get<any>(environment.projectsByFramework + this.selectedFramework)
      .subscribe((response) => {
        this.byFramework = response;
      });
    console.log(this.selectedFramework);
  }

  projectsByTools() {
    this.httpClient
      .get<any>(environment.projectsByTools + this.selectedTool)
      .subscribe((response) => {
        this.byTools = response;
      });
    console.log(this.selectedTool);
  }

  projectsByLanguage() {
    this.httpClient
      .get<any>(environment.projectsByLanguage + this.selectedLanguage)
      .subscribe((response) => {
        this.byLanguage = response;
      });
  }
}
