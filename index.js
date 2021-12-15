var im = require('imagemagick');
im.convert(
        ['./mamang.jpeg', '-fuzz', '23%', '-transparent', 'green', 'teteh.png'],
        function (err, stdout) {
          if (err) {
            console.log(err)
          }
          console.log(stdout)
        },
      );
