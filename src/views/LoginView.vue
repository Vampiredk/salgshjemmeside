 <template>
  <head>

  </head>
<body>
  <form action="action_page.php" method="post">
   <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <button type="submit">Login</button>
   </div>

   <div class="container" style="background-color:#f1f1f1">
    <router-link to="/">
      <button type="button" class="cancelbtn">Cancel</button>
    </router-link>
   </div>
  </form>
</body>
</template>
