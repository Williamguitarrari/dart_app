import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebserviceProvider } from '../../providers/webservice/webservice';


@IonicPage()
@Component({
  selector: 'page-repositories',
  templateUrl: 'repositories.html',
})
export class RepositoriesPage {
  public repositories: any;
  public repositoriesList: any;
  errorMessage;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public webserviceProvider: WebserviceProvider
              ) {
  }

  ionViewDidEnter() {
    this.loadRepositories();    
  }

  loadRepositories(){
    this.webserviceProvider.loadRepositories()
    .then(data => {
      this.repositoriesList = data;
      this.initializeItems();
    });
    
  }

  initializeItems() {
    this.repositories = this.repositoriesList;
  }
  

  filterRepositories(event: any): void {
    this.initializeItems();    
    this.errorMessage = null;
    let searchTerm = event.target.value;
    if (searchTerm && searchTerm.trim() != '' && searchTerm.length > 2) {
         this.repositories = this.repositories.filter((repository) => {
            return (repository.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
            });              
              if (this.repositories.length == 0){
                this.errorMessage = 'Sem resultados para essa busca...';
              }     
        }
      }
}
