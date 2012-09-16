wsdl2js -verbose -d Simple ../../iphone/wsdl/hello_world.wsdl
java2js -databinding jaxb -verbose -cp ../../iphone/build/classes -d ./Beverage -o BeverageService.js demo.iphone.beverage.BeverageService
java2js -databinding jaxb -verbose -cp ../../iphone/build/classes -d ./Bank -o BankService.js demo.iphone.bank.BankService

cp ./Simple/SimpleService.js ../iPhone.dcproj/project/Services
cp ./Beverage/BeverageService.js ../iPhone.dcproj/project/Services
cp ./Bank/BankService.js ../iPhone.dcproj/project/Services
