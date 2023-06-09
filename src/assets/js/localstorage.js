if(localStorage.getItem("check")==null)
{
    localStorage.setItem("check","0")
}

if(localStorage.getItem("Registertable")==null)
{
    localStorage.setItem("Registertable",'[]')
}
if(localStorage.getItem("cart")==null)
{
    localStorage.setItem("cart",'[]');
}
if(localStorage.getItem("items")==null)
{   var data=[];
    var arr=[['Realmef22','15,000'],['Redmi 8','12,000'],['Nokia AGX','48,000'],['one+9','39,000'],['samsunggalaxy','28,000'],['iphone12','1,28,000']];
    var arr1=[['Dell-Lattitude3420','75,000','MediaTech-G95pro'],['Dell-XPS17','1,12,000','Snapdragan-V24'],['Asus-vivobook','88,000','intel-G4-r434'],['Hp-15sfrs','1,39,000','Intel-Corei7-iuy789'],['Hp-pavillion','2,18,000','Intel-Corei11-vpro'],['Sony-vaio','1,66,000','E Series SVE1513BYNB ']];
  data.push(arr);
  data.push(arr1);
  localStorage.setItem("items",JSON.stringify(data));

}