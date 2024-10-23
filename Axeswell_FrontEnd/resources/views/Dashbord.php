<?php
$pageTitle = "DASHBOARD";
include '_headerview.php'; ?>

<div class="ui grid container" style="min-height: 100vh; padding-top: 20px;">
        <aside class="four wide column">
            <div class="ui vertical fluid menu elegant-menu">
                <div class="header item">Dashboard</div>
                <a class="item active" id="TabHome"><i class="fas fa-home"></i> Home</a>
                <a class="item" id="TabProfile"><i class="fas fa-user"></i> Profile</a>
                <a class="item"><i class="fas fa-chart-bar"></i> Statistics</a>
                <a class="item"><i class="fas fa-cog"></i> Settings</a>
            </div>
        </aside>
        <main class="twelve wide column">
            <div class="ui segment elegant-header">
                <h1 class="ui header">Welcome Back, Jesslyn</h1>
                <div class="ui right floated">
                    <div class="ui item">
                        <i class="fas fa-user-circle"></i>
                        Jesslyn Felicia Kristianto
                    </div>
                </div>
            </div>
            <section class="ui three stackable cards">
                <div class="card elegant-card">
                    <div class="content">
                        <div class="header">Total Views</div>
                        <div class="description">10,235</div>
                    </div>
                </div>
                <div class="card elegant-card">
                    <div class="content">
                        <div class="header">Total Likes</div>
                        <div class="description">2,389</div>
                    </div>
                </div>
                <div class="card elegant-card">
                    <div class="content">
                        <div class="header">Total Comments</div>
                        <div class="description">521</div>
                    </div>
                </div>
            </section>
            <section class="ui segment">
                <h2 class="ui header">Statistics Overview</h2>
                <canvas id="myChart"></canvas>
            </section>
        </main>
    </div>