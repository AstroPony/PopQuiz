import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule } from '@angular/material/input';
import { IntroComponent } from './intro/intro.component';
import { NameComponent } from './name/name.component';
import { BlockComponent } from './block/block.component';
import {FormsModule} from "@angular/forms";
import { QuizComponent } from './quiz/quiz.component';
import { TimerComponent } from './quiz/timer/timer.component';
import { QuestionComponent } from './quiz/question/question.component';
import { AnswerComponent } from './quiz/answer/answer.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NameComponent,
    BlockComponent,
    QuizComponent,
    TimerComponent,
    QuestionComponent,
    AnswerComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        LayoutModule,
        FormsModule,
        MatInputModule,
        MatProgressBarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
