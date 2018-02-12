import { Routes, RouterModule } from '@angular/router';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent} from './components/problem-detail/problem-detail.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full'
    },

    {
        path: 'problems',
        component: ProblemListComponent
    },

    {
        path: 'problems/newProblem',
        component: NewProblemComponent
    },

    {
        path: 'problems/:id',
        component: ProblemDetailComponent
    },
    
    {
        path: '**',
        redirectTo: 'problems'
    }
]

export const routings = RouterModule.forRoot(routes);