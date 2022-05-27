import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const benchmarkURL = 'http://localhost:5000/remoteEntry.js'
const reportingURL = 'http://localhost:3000/remoteEntry.js'

const routes: Routes = [
  {
    path: 'benchmark',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: benchmarkURL,
      exposedModule: './BenchmarkModule'
    }).then(m => m.BenchmarkModule)
  },
  {
    path: 'reporting',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: reportingURL,
      exposedModule: './ReportingModule'
    }).then(m => m.ReportingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
