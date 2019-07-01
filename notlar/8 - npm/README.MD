# NPM kullanımı
`npm install <paketadi>` ile paketi kurarız. Bu şekilde kurulum bir yerel kurulumdur ve başka projede çalıştırılamaz ancak `npm install -g <paketadi>` yapılırsa paket makinaya kurulacaktır. Global modullerin kurulduğu dizini görmek için `npm root -g` komutunu kullanırız.

Kurulum yapılırken `npm install <paketadı> --save` kullanımı önerilir bu sayede paket isimleri package.json içerisine kurulur ve buradan başka bir cihaza kurulm yapılırken  `npm install` komutu ile paketler kurulur. Eğer bir paketin herhangi bir sürümünü kurmak istersek `npm install <paketadi>@1.8.1 --save` kullanılmalıdır.

Eğer sadece geliştiricinin kuracağı tarzda paket yüklemek istersek `npm install <paketadi> --save-dev` deriz.

Paket silmek için `npm uninstall <pakeradi>` 

