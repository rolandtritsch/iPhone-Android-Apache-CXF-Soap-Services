This demo shows how to use the javascript generation capabilities 
of FUSE-SF/Apache CXF to access SOAP/HTTP services from an iPhone
and/or an Android phone.

It also shows how to access RESTful FUSE services.

After you have unzipped the demo to a location of you choice
you just need to run "mvn install" to get all components compiled
and installed (you obviously need to install maven first :)).
Downloading all of the components might take a while. Have
a coffee ready :).

Next you start the server with "mvn -Pserver" and point 
a/the (safari) browser to it (http://localhost:9000/iPhone.html).

To make the demo more realistic you can also use an iPhone
emulator (http://sourceforge.net/projects/iphonesimulator)
or the Android emulator that comes with the Android SDK.

Running the "Simple", "Beverage" and (RESTful) "customer" 
demo should be self-explanatory.

For the "Bank" demo ...

- you need to login as "Customer_0", no password required

- you click on "Setup" and create a new customer like "Roland"
(no spaces allowed in customer names)

- you click on "Pay Payee". Roland should be in the drop down. Pay
him USD 1000000. click on "Pay".

- click on "History" to see that the payment went through.

The bank demo allows you to great a new customer, use your iPhone
to send some money to this customer and look at the history of
your transactions, means who have i send money to and how much.

It is suppose to mimic a simple eBanking solution.
