import {Component, Injectable, Input, OnInit} from '@angular/core';
import {GithubServiceService} from "../github-service.service";
import {User} from "./user";
declare var $: any;

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  text = '';
  // user : any;
  user: User;
  constructor(private githubService: GithubServiceService) {
    this.user = new User();
    this.nullUser();}
  ngOnInit(): void {}


  githubAccess(){

    this.githubService.get(this.text)

    //   .subscribe((user)=>{
    //        console.log(user);
    //        this.user = user;
    //        alert(this.user.login);
    // } )
      .toPromise().then((user) => {
      this.user = user;
      alert(this.user.login);
      // $( '#card' ).css( "display:none" )
    });

    ;

  }

  nullUser(){
    this.user.login = '';
    this.user.id = 0;
    this.user.avatar_url = '';
    this.user.gravatar_id = '';
    this.user.url = '';
    this.user.html_url = '';
    this.user.followers_url = '';
    this.user.following_url = '';
    this.user.gists_url = '';
    this.user.starred_url = '';
    this.user.subscriptions_url = '';
    this.user.organizations_url = '';
    this.user.repos_url = '';
    this.user.events_url = '';
    this.user.received_events_url = '';
    this.user.type = '';
    this.user.site_admin = '';
    this.user.name = '';
    this.user.company = '';
    this.user.blog = '';
    this.user.location = '';
    this.user.email = '';
    this.user.hireable = '';
    this.user.bio = '';
    this.user.public_repos = 0;
    this.user.public_gists = 0;
    this.user.followers = 0;
    this.user.following = 0;
    this.user.created_at = '';
    this.user.updated_at = '';
  }
}
