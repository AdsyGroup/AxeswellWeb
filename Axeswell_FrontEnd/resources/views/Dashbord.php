<?php
$pageTitle = "DASHBOARD";
include 'headerview.php'; ?>

<div class="container">
        
        <nav class="sidebar">
            <h2>My Dashboard</h2>
            <ul>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#analytics">Analytics</a></li>
                <li><a href="#settings">Settings</a></li>
                <li><a href="#profile">Profile</a></li>
            </ul>
        </nav>

 
        <div class="main-content">
 
            <header class="header">
                <h1>Welcome, Jesslyn</h1>
                <div class="profile">
                    <img src="profile.jpg" alt="Profile" class="profile-img">
                    <span>Jesslyn</span>
                </div>
            </header>

 
            <section class="content">
                <div class="overview">
                    <h2>Overview</h2>
                    <p>Here is your dashboard overview.</p>
                </div>
                <div class="analytics">
                    <h2>Analytics</h2>
                    <p>Analytics data will appear here.</p>
                </div>
                <div class="settings">
                    <h2>Settings</h2>
                    <p>Manage your settings here.</p>
                </div>
            </section>
        </div>
    </div>