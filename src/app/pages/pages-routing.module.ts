import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardauthService } from '../guard/guardauth.service';

import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { ConsltmanagerComponent } from './competences/consltmanager/consltmanager.component';
import { EcheanceContratComponent } from './contrat/echeance-contrat/echeance-contrat.component';



import { DefaultComponent } from './dashboards/default/default.component';
import { MiseAObejectifComponent } from './objectifs/mise-a-obejectif/mise-a-obejectif.component';

const routes: Routes = [
  { path: '', redirectTo: '/account/login',pathMatch: 'full'  },
  { path:'account/login',redirectTo:'dashboard' },
  { path: 'dashboard', component: DefaultComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'contrat/echeance-contrat', component: EcheanceContratComponent },
  { path: 'objectifs/mise-a-obejectif', component: MiseAObejectifComponent },
  { path: 'competences/consltmanager', component: ConsltmanagerComponent },

  


  { path: 'chat', component: ChatComponent },
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule),canActivate:[GuardauthService] },
  { path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
  { path: 'demande', loadChildren: () => import('./demande/demande.module').then(m => m.DemandeModule) },
  { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule) },
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
  { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'charts', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },
  { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },


  { path: 'employe', loadChildren: () => import('./Employe/Employe.module').then(m => m.EmployeModule) },


  { path: 'conge', loadChildren: () => import('./conge/conge.module').then(m => m.CongeModule) },
  { path: 'paie', loadChildren: () => import('./paie/paie.module').then(m => m.PaieModule) },

  { path: 'opposition', loadChildren: () => import('./opposition/consltoppo.module').then(m => m.ConsltoppoModule) },

  { path: 'bsoin', loadChildren: () => import('./bsoin/Bsoin.module').then(m => m.BsoinModule) },

  { path: 'pret-avance', loadChildren: () => import('./pret-avance/pret-avance.module').then(m => m.PretAvanceModule) },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
