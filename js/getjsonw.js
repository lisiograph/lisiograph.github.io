$(function(){
  $.getJSON("https://spreadsheets.google.com/feeds/list/1bvMuTAvRxGxLuUOa3_3zpRfbsrbp4CuEtbbeahEGuB4/1/public/values?alt=json", function(json){

    $(".name0001").append(json.feed.entry[0].gsx$_cn6ca.$t);
    $(".pv0001").append('wikipedia pv: ' + json.feed.entry[0].gsx$_cokwr.$t);
    $(".change0001").append('前週比: ' + json.feed.entry[0].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[0].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
      $(".card0001").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0001").addClass("card-bg-down");
    }
    else{
    $(".card0001").addClass("card-bg-up");
    }
    }

    $(".name0002").append(json.feed.entry[1].gsx$_cn6ca.$t);
    $(".pv0002").append('wikipedia pv: ' + json.feed.entry[1].gsx$_cokwr.$t);
    $(".change0002").append('前週比: ' + json.feed.entry[1].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[1].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0002").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0002").addClass("card-bg-down");
    }
    else{
    $(".card0002").addClass("card-bg-up");
    }
    }

    $(".name0003").append(json.feed.entry[2].gsx$_cn6ca.$t);
    $(".pv0003").append('wikipedia pv: ' + json.feed.entry[2].gsx$_cokwr.$t);
    $(".change0003").append('前週比: ' + json.feed.entry[2].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[2].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0003").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0003").addClass("card-bg-down");
    }
    else{
    $(".card0003").addClass("card-bg-up");
    }
    }

    $(".name0004").append(json.feed.entry[3].gsx$_cn6ca.$t);
    $(".pv0004").append('wikipedia pv: ' + json.feed.entry[3].gsx$_cokwr.$t);
    $(".change0004").append('前週比: ' + json.feed.entry[3].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[3].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0004").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0004").addClass("card-bg-down");
    }
    else{
    $(".card0004").addClass("card-bg-up");
    }
    }

    $(".name0005").append(json.feed.entry[4].gsx$_cn6ca.$t);
    $(".pv0005").append('wikipedia pv: ' + json.feed.entry[4].gsx$_cokwr.$t);
    $(".change0005").append('前週比: ' + json.feed.entry[4].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[4].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0005").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0005").addClass("card-bg-down");
    }
    else{
    $(".card0005").addClass("card-bg-up");
    }
    }

    $(".name0006").append(json.feed.entry[5].gsx$_cn6ca.$t);
    $(".pv0006").append('wikipedia pv: ' + json.feed.entry[5].gsx$_cokwr.$t);
    $(".change0006").append('前週比: ' + json.feed.entry[5].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[5].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
      $(".card0006").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0006").addClass("card-bg-down");
    }
    else{
    $(".card0006").addClass("card-bg-up");
    }
    }

    $(".name0007").append(json.feed.entry[6].gsx$_cn6ca.$t);
    $(".pv0007").append('wikipedia pv: ' + json.feed.entry[6].gsx$_cokwr.$t);
    $(".change0007").append('前週比: ' + json.feed.entry[6].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[6].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0007").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0007").addClass("card-bg-down");
    }
    else{
    $(".card0007").addClass("card-bg-up");
    }
    }

    $(".name0008").append(json.feed.entry[7].gsx$_cn6ca.$t);
    $(".pv0008").append('wikipedia pv: ' + json.feed.entry[7].gsx$_cokwr.$t);
    $(".change0008").append('前週比: ' + json.feed.entry[7].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[7].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0008").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0008").addClass("card-bg-down");
    }
    else{
    $(".card0008").addClass("card-bg-up");
    }
    }

    $(".name0009").append(json.feed.entry[8].gsx$_cn6ca.$t);
    $(".pv0009").append('wikipedia pv: ' + json.feed.entry[8].gsx$_cokwr.$t);
    $(".change0009").append('前週比: ' + json.feed.entry[8].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[8].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0009").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0009").addClass("card-bg-down");
    }
    else{
    $(".card0009").addClass("card-bg-up");
    }
    }

    $(".name0010").append(json.feed.entry[9].gsx$_cn6ca.$t);
    $(".pv0010").append('wikipedia pv: ' + json.feed.entry[9].gsx$_cokwr.$t);
    $(".change0010").append('前週比: ' + json.feed.entry[9].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[9].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0010").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0010").addClass("card-bg-down");
    }
    else{
    $(".card0010").addClass("card-bg-up");
    }
    }

    $(".name0011").append(json.feed.entry[10].gsx$_cn6ca.$t);
    $(".pv0011").append('wikipedia pv: ' + json.feed.entry[10].gsx$_cokwr.$t);
    $(".change0011").append('前週比: ' + json.feed.entry[10].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[10].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0011").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0011").addClass("card-bg-down");
    }
    else{
    $(".card0011").addClass("card-bg-up");
    }
    }

    $(".name0012").append(json.feed.entry[11].gsx$_cn6ca.$t);
    $(".pv0012").append('wikipedia pv: ' + json.feed.entry[11].gsx$_cokwr.$t);
    $(".change0012").append('前週比: ' + json.feed.entry[11].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[11].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0012").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0012").addClass("card-bg-down");
    }
    else{
    $(".card0012").addClass("card-bg-up");
    }
    }

    $(".name0013").append(json.feed.entry[12].gsx$_cn6ca.$t);
    $(".pv0013").append('wikipedia pv: ' + json.feed.entry[12].gsx$_cokwr.$t);
    $(".change0013").append('前週比: ' + json.feed.entry[12].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[12].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0013").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0013").addClass("card-bg-down");
    }
    else{
    $(".card0013").addClass("card-bg-up");
    }
    }

    $(".name0014").append(json.feed.entry[13].gsx$_cn6ca.$t);
    $(".pv0014").append('wikipedia pv: ' + json.feed.entry[13].gsx$_cokwr.$t);
    $(".change0014").append('前週比: ' + json.feed.entry[13].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[13].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0014").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0014").addClass("card-bg-down");
    }
    else{
    $(".card0014").addClass("card-bg-up");
    }
    }

    $(".name0015").append(json.feed.entry[14].gsx$_cn6ca.$t);
    $(".pv0015").append('wikipedia pv: ' + json.feed.entry[14].gsx$_cokwr.$t);
    $(".change0015").append('前週比: ' + json.feed.entry[14].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[14].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0015").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0015").addClass("card-bg-down");
    }
    else{
    $(".card0015").addClass("card-bg-up");
    }
    }

    $(".name0016").append(json.feed.entry[15].gsx$_cn6ca.$t);
    $(".pv0016").append('wikipedia pv: ' + json.feed.entry[15].gsx$_cokwr.$t);
    $(".change0016").append('前週比: ' + json.feed.entry[15].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[15].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0016").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0016").addClass("card-bg-down");
    }
    else{
    $(".card0016").addClass("card-bg-up");
    }
    }

    $(".name0017").append(json.feed.entry[16].gsx$_cn6ca.$t);
    $(".pv0017").append('wikipedia pv: ' + json.feed.entry[16].gsx$_cokwr.$t);
    $(".change0017").append('前週比: ' + json.feed.entry[16].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[16].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0017").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0017").addClass("card-bg-down");
    }
    else{
    $(".card0017").addClass("card-bg-up");
    }
    }

    $(".name0018").append(json.feed.entry[17].gsx$_cn6ca.$t);
    $(".pv0018").append('wikipedia pv: ' + json.feed.entry[17].gsx$_cokwr.$t);
    $(".change0018").append('前週比: ' + json.feed.entry[17].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[17].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0018").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0018").addClass("card-bg-down");
    }
    else{
    $(".card0018").addClass("card-bg-up");
    }
    }

    $(".name0019").append(json.feed.entry[18].gsx$_cn6ca.$t);
    $(".pv0019").append('wikipedia pv: ' + json.feed.entry[18].gsx$_cokwr.$t);
    $(".change0019").append('前週比: ' + json.feed.entry[18].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[18].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0019").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0019").addClass("card-bg-down");
    }
    else{
    $(".card0019").addClass("card-bg-up");
    }
    }

    $(".name0020").append(json.feed.entry[19].gsx$_cn6ca.$t);
    $(".pv0020").append('wikipedia pv: ' + json.feed.entry[19].gsx$_cokwr.$t);
    $(".change0020").append('前週比: ' + json.feed.entry[19].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[19].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0020").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0020").addClass("card-bg-down");
    }
    else{
    $(".card0020").addClass("card-bg-up");
    }
    }

    $(".name0021").append(json.feed.entry[20].gsx$_cn6ca.$t);
    $(".pv0021").append('wikipedia pv: ' + json.feed.entry[20].gsx$_cokwr.$t);
    $(".change0021").append('前週比: ' + json.feed.entry[20].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[20].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0021").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0021").addClass("card-bg-down");
    }
    else{
    $(".card0021").addClass("card-bg-up");
    }
    }

    $(".name0022").append(json.feed.entry[21].gsx$_cn6ca.$t);
    $(".pv0022").append('wikipedia pv: ' + json.feed.entry[21].gsx$_cokwr.$t);
    $(".change0022").append('前週比: ' + json.feed.entry[21].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[21].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0022").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0022").addClass("card-bg-down");
    }
    else{
    $(".card0022").addClass("card-bg-up");
    }
    }

    $(".name0023").append(json.feed.entry[22].gsx$_cn6ca.$t);
    $(".pv0023").append('wikipedia pv: ' + json.feed.entry[22].gsx$_cokwr.$t);
    $(".change0023").append('前週比: ' + json.feed.entry[22].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[22].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0023").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0023").addClass("card-bg-down");
    }
    else{
    $(".card0023").addClass("card-bg-up");
    }
    }

    $(".name0024").append(json.feed.entry[23].gsx$_cn6ca.$t);
    $(".pv0024").append('wikipedia pv: ' + json.feed.entry[23].gsx$_cokwr.$t);
    $(".change0024").append('前週比: ' + json.feed.entry[23].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[23].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0024").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0024").addClass("card-bg-down");
    }
    else{
    $(".card0024").addClass("card-bg-up");
    }
    }

    $(".name0025").append(json.feed.entry[24].gsx$_cn6ca.$t);
    $(".pv0025").append('wikipedia pv: ' + json.feed.entry[24].gsx$_cokwr.$t);
    $(".change0025").append('前週比: ' + json.feed.entry[24].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[24].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0025").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0025").addClass("card-bg-down");
    }
    else{
    $(".card0025").addClass("card-bg-up");
    }
    }

    $(".name0026").append(json.feed.entry[25].gsx$_cn6ca.$t);
    $(".pv0026").append('wikipedia pv: ' + json.feed.entry[25].gsx$_cokwr.$t);
    $(".change0026").append('前週比: ' + json.feed.entry[25].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[25].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0026").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0026").addClass("card-bg-down");
    }
    else{
    $(".card0026").addClass("card-bg-up");
    }
    }

    $(".name0027").append(json.feed.entry[26].gsx$_cn6ca.$t);
    $(".pv0027").append('wikipedia pv: ' + json.feed.entry[26].gsx$_cokwr.$t);
    $(".change0027").append('前週比: ' + json.feed.entry[26].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[26].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0027").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0027").addClass("card-bg-down");
    }
    else{
    $(".card0027").addClass("card-bg-up");
    }
    }

    $(".name0028").append(json.feed.entry[27].gsx$_cn6ca.$t);
    $(".pv0028").append('wikipedia pv: ' + json.feed.entry[27].gsx$_cokwr.$t);
    $(".change0028").append('前週比: ' + json.feed.entry[27].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[27].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0028").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0028").addClass("card-bg-down");
    }
    else{
    $(".card0028").addClass("card-bg-up");
    }
    }

    $(".name0029").append(json.feed.entry[28].gsx$_cn6ca.$t);
    $(".pv0029").append('wikipedia pv: ' + json.feed.entry[28].gsx$_cokwr.$t);
    $(".change0029").append('前週比: ' + json.feed.entry[28].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[28].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0029").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0029").addClass("card-bg-down");
    }
    else{
    $(".card0029").addClass("card-bg-up");
    }
    }

    $(".name0030").append(json.feed.entry[29].gsx$_cn6ca.$t);
    $(".pv0030").append('wikipedia pv: ' + json.feed.entry[29].gsx$_cokwr.$t);
    $(".change0030").append('前週比: ' + json.feed.entry[29].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[29].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0030").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0030").addClass("card-bg-down");
    }
    else{
    $(".card0030").addClass("card-bg-up");
    }
    }

    $(".name0031").append(json.feed.entry[30].gsx$_cn6ca.$t);
    $(".pv0031").append('wikipedia pv: ' + json.feed.entry[30].gsx$_cokwr.$t);
    $(".change0031").append('前週比: ' + json.feed.entry[30].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[30].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0031").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0031").addClass("card-bg-down");
    }
    else{
    $(".card0031").addClass("card-bg-up");
    }
    }

    $(".name0032").append(json.feed.entry[31].gsx$_cn6ca.$t);
    $(".pv0032").append('wikipedia pv: ' + json.feed.entry[31].gsx$_cokwr.$t);
    $(".change0032").append('前週比: ' + json.feed.entry[31].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[31].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0032").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0032").addClass("card-bg-down");
    }
    else{
    $(".card0032").addClass("card-bg-up");
    }
    }

    $(".name0033").append(json.feed.entry[32].gsx$_cn6ca.$t);
    $(".pv0033").append('wikipedia pv: ' + json.feed.entry[32].gsx$_cokwr.$t);
    $(".change0033").append('前週比: ' + json.feed.entry[32].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[32].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0033").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0033").addClass("card-bg-down");
    }
    else{
    $(".card0033").addClass("card-bg-up");
    }
    }

    $(".name0034").append(json.feed.entry[33].gsx$_cn6ca.$t);
    $(".pv0034").append('wikipedia pv: ' + json.feed.entry[33].gsx$_cokwr.$t);
    $(".change0034").append('前週比: ' + json.feed.entry[33].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[33].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0034").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0034").addClass("card-bg-down");
    }
    else{
    $(".card0034").addClass("card-bg-up");
    }
    }

    $(".name0035").append(json.feed.entry[34].gsx$_cn6ca.$t);
    $(".pv0035").append('wikipedia pv: ' + json.feed.entry[34].gsx$_cokwr.$t);
    $(".change0035").append('前週比: ' + json.feed.entry[34].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[34].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0035").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0035").addClass("card-bg-down");
    }
    else{
    $(".card0035").addClass("card-bg-up");
    }
    }

    $(".name0036").append(json.feed.entry[35].gsx$_cn6ca.$t);
    $(".pv0036").append('wikipedia pv: ' + json.feed.entry[35].gsx$_cokwr.$t);
    $(".change0036").append('前週比: ' + json.feed.entry[35].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[35].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0036").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0036").addClass("card-bg-down");
    }
    else{
    $(".card0036").addClass("card-bg-up");
    }
    }

    $(".name0037").append(json.feed.entry[36].gsx$_cn6ca.$t);
    $(".pv0037").append('wikipedia pv: ' + json.feed.entry[36].gsx$_cokwr.$t);
    $(".change0037").append('前週比: ' + json.feed.entry[36].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[36].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0037").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0037").addClass("card-bg-down");
    }
    else{
    $(".card0037").addClass("card-bg-up");
    }
    }

    $(".name0038").append(json.feed.entry[37].gsx$_cn6ca.$t);
    $(".pv0038").append('wikipedia pv: ' + json.feed.entry[37].gsx$_cokwr.$t);
    $(".change0038").append('前週比: ' + json.feed.entry[37].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[37].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0038").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0038").addClass("card-bg-down");
    }
    else{
    $(".card0038").addClass("card-bg-up");
    }
    }

    $(".name0039").append(json.feed.entry[38].gsx$_cn6ca.$t);
    $(".pv0039").append('wikipedia pv: ' + json.feed.entry[38].gsx$_cokwr.$t);
    $(".change0039").append('前週比: ' + json.feed.entry[38].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[38].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0039").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0039").addClass("card-bg-down");
    }
    else{
    $(".card0039").addClass("card-bg-up");
    }
    }

    $(".name0040").append(json.feed.entry[39].gsx$_cn6ca.$t);
    $(".pv0040").append('wikipedia pv: ' + json.feed.entry[39].gsx$_cokwr.$t);
    $(".change0040").append('前週比: ' + json.feed.entry[39].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[39].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0040").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0040").addClass("card-bg-down");
    }
    else{
    $(".card0040").addClass("card-bg-up");
    }
    }

    $(".name0041").append(json.feed.entry[40].gsx$_cn6ca.$t);
    $(".pv0041").append('wikipedia pv: ' + json.feed.entry[40].gsx$_cokwr.$t);
    $(".change0041").append('前週比: ' + json.feed.entry[40].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[40].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0041").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0041").addClass("card-bg-down");
    }
    else{
    $(".card0041").addClass("card-bg-up");
    }
    }

    $(".name0042").append(json.feed.entry[41].gsx$_cn6ca.$t);
    $(".pv0042").append('wikipedia pv: ' + json.feed.entry[41].gsx$_cokwr.$t);
    $(".change0042").append('前週比: ' + json.feed.entry[41].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[41].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0042").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0042").addClass("card-bg-down");
    }
    else{
    $(".card0042").addClass("card-bg-up");
    }
    }

    $(".name0043").append(json.feed.entry[42].gsx$_cn6ca.$t);
    $(".pv0043").append('wikipedia pv: ' + json.feed.entry[42].gsx$_cokwr.$t);
    $(".change0043").append('前週比: ' + json.feed.entry[42].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[42].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0043").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0043").addClass("card-bg-down");
    }
    else{
    $(".card0043").addClass("card-bg-up");
    }
    }

    $(".name0044").append(json.feed.entry[43].gsx$_cn6ca.$t);
    $(".pv0044").append('wikipedia pv: ' + json.feed.entry[43].gsx$_cokwr.$t);
    $(".change0044").append('前週比: ' + json.feed.entry[43].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[43].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0044").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0044").addClass("card-bg-down");
    }
    else{
    $(".card0044").addClass("card-bg-up");
    }
    }

    $(".name0045").append(json.feed.entry[44].gsx$_cn6ca.$t);
    $(".pv0045").append('wikipedia pv: ' + json.feed.entry[44].gsx$_cokwr.$t);
    $(".change0045").append('前週比: ' + json.feed.entry[44].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[44].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0045").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0045").addClass("card-bg-down");
    }
    else{
    $(".card0045").addClass("card-bg-up");
    }
    }

    $(".name0046").append(json.feed.entry[45].gsx$_cn6ca.$t);
    $(".pv0046").append('wikipedia pv: ' + json.feed.entry[45].gsx$_cokwr.$t);
    $(".change0046").append('前週比: ' + json.feed.entry[45].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[45].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0046").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0046").addClass("card-bg-down");
    }
    else{
    $(".card0046").addClass("card-bg-up");
    }
    }

    $(".name0047").append(json.feed.entry[46].gsx$_cn6ca.$t);
    $(".pv0047").append('wikipedia pv: ' + json.feed.entry[46].gsx$_cokwr.$t);
    $(".change0047").append('前週比: ' + json.feed.entry[46].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[46].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0047").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0047").addClass("card-bg-down");
    }
    else{
    $(".card0047").addClass("card-bg-up");
    }
    }

    $(".name0048").append(json.feed.entry[47].gsx$_cn6ca.$t);
    $(".pv0048").append('wikipedia pv: ' + json.feed.entry[47].gsx$_cokwr.$t);
    $(".change0048").append('前週比: ' + json.feed.entry[47].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[47].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0048").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0048").addClass("card-bg-down");
    }
    else{
    $(".card0048").addClass("card-bg-up");
    }
    }

    $(".name0049").append(json.feed.entry[48].gsx$_cn6ca.$t);
    $(".pv0049").append('wikipedia pv: ' + json.feed.entry[48].gsx$_cokwr.$t);
    $(".change0049").append('前週比: ' + json.feed.entry[48].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[48].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0049").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0049").addClass("card-bg-down");
    }
    else{
    $(".card0049").addClass("card-bg-up");
    }
    }

    $(".name0050").append(json.feed.entry[49].gsx$_cn6ca.$t);
    $(".pv0050").append('wikipedia pv: ' + json.feed.entry[49].gsx$_cokwr.$t);
    $(".change0050").append('前週比: ' + json.feed.entry[49].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[49].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0050").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0050").addClass("card-bg-down");
    }
    else{
    $(".card0050").addClass("card-bg-up");
    }
    }

    $(".name0051").append(json.feed.entry[50].gsx$_cn6ca.$t);
    $(".pv0051").append('wikipedia pv: ' + json.feed.entry[50].gsx$_cokwr.$t);
    $(".change0051").append('前週比: ' + json.feed.entry[50].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[50].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0051").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0051").addClass("card-bg-down");
    }
    else{
    $(".card0051").addClass("card-bg-up");
    }
    }

    $(".name0052").append(json.feed.entry[51].gsx$_cn6ca.$t);
    $(".pv0052").append('wikipedia pv: ' + json.feed.entry[51].gsx$_cokwr.$t);
    $(".change0052").append('前週比: ' + json.feed.entry[51].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[51].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0052").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0052").addClass("card-bg-down");
    }
    else{
    $(".card0052").addClass("card-bg-up");
    }
    }

    $(".name0053").append(json.feed.entry[52].gsx$_cn6ca.$t);
    $(".pv0053").append('wikipedia pv: ' + json.feed.entry[52].gsx$_cokwr.$t);
    $(".change0053").append('前週比: ' + json.feed.entry[52].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[52].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0053").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0053").addClass("card-bg-down");
    }
    else{
    $(".card0053").addClass("card-bg-up");
    }
    }

    $(".name0054").append(json.feed.entry[53].gsx$_cn6ca.$t);
    $(".pv0054").append('wikipedia pv: ' + json.feed.entry[53].gsx$_cokwr.$t);
    $(".change0054").append('前週比: ' + json.feed.entry[53].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[53].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0054").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0054").addClass("card-bg-down");
    }
    else{
    $(".card0054").addClass("card-bg-up");
    }
    }

    $(".name0055").append(json.feed.entry[54].gsx$_cn6ca.$t);
    $(".pv0055").append('wikipedia pv: ' + json.feed.entry[54].gsx$_cokwr.$t);
    $(".change0055").append('前週比: ' + json.feed.entry[54].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[54].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0055").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0055").addClass("card-bg-down");
    }
    else{
    $(".card0055").addClass("card-bg-up");
    }
    }

    $(".name0056").append(json.feed.entry[55].gsx$_cn6ca.$t);
    $(".pv0056").append('wikipedia pv: ' + json.feed.entry[55].gsx$_cokwr.$t);
    $(".change0056").append('前週比: ' + json.feed.entry[55].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[55].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0056").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0056").addClass("card-bg-down");
    }
    else{
    $(".card0056").addClass("card-bg-up");
    }
    }

    $(".name0057").append(json.feed.entry[56].gsx$_cn6ca.$t);
    $(".pv0057").append('wikipedia pv: ' + json.feed.entry[56].gsx$_cokwr.$t);
    $(".change0057").append('前週比: ' + json.feed.entry[56].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[56].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0057").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0057").addClass("card-bg-down");
    }
    else{
    $(".card0057").addClass("card-bg-up");
    }
    }

    $(".name0058").append(json.feed.entry[57].gsx$_cn6ca.$t);
    $(".pv0058").append('wikipedia pv: ' + json.feed.entry[57].gsx$_cokwr.$t);
    $(".change0058").append('前週比: ' + json.feed.entry[57].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[57].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0058").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0058").addClass("card-bg-down");
    }
    else{
    $(".card0058").addClass("card-bg-up");
    }
    }

    $(".name0059").append(json.feed.entry[58].gsx$_cn6ca.$t);
    $(".pv0059").append('wikipedia pv: ' + json.feed.entry[58].gsx$_cokwr.$t);
    $(".change0059").append('前週比: ' + json.feed.entry[58].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[58].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0059").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0059").addClass("card-bg-down");
    }
    else{
    $(".card0059").addClass("card-bg-up");
    }
    }

    $(".name0060").append(json.feed.entry[59].gsx$_cn6ca.$t);
    $(".pv0060").append('wikipedia pv: ' + json.feed.entry[59].gsx$_cokwr.$t);
    $(".change0060").append('前週比: ' + json.feed.entry[59].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[59].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0060").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0060").addClass("card-bg-down");
    }
    else{
    $(".card0060").addClass("card-bg-up");
    }
    }

    $(".name0061").append(json.feed.entry[60].gsx$_cn6ca.$t);
    $(".pv0061").append('wikipedia pv: ' + json.feed.entry[60].gsx$_cokwr.$t);
    $(".change0061").append('前週比: ' + json.feed.entry[60].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[60].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0061").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0061").addClass("card-bg-down");
    }
    else{
    $(".card0061").addClass("card-bg-up");
    }
    }

    $(".name0062").append(json.feed.entry[61].gsx$_cn6ca.$t);
    $(".pv0062").append('wikipedia pv: ' + json.feed.entry[61].gsx$_cokwr.$t);
    $(".change0062").append('前週比: ' + json.feed.entry[61].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[61].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0062").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0062").addClass("card-bg-down");
    }
    else{
    $(".card0062").addClass("card-bg-up");
    }
    }

    $(".name0063").append(json.feed.entry[62].gsx$_cn6ca.$t);
    $(".pv0063").append('wikipedia pv: ' + json.feed.entry[62].gsx$_cokwr.$t);
    $(".change0063").append('前週比: ' + json.feed.entry[62].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[62].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0063").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0063").addClass("card-bg-down");
    }
    else{
    $(".card0063").addClass("card-bg-up");
    }
    }

    $(".name0064").append(json.feed.entry[63].gsx$_cn6ca.$t);
    $(".pv0064").append('wikipedia pv: ' + json.feed.entry[63].gsx$_cokwr.$t);
    $(".change0064").append('前週比: ' + json.feed.entry[63].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[63].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0064").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0064").addClass("card-bg-down");
    }
    else{
    $(".card0064").addClass("card-bg-up");
    }
    }

    $(".name0065").append(json.feed.entry[64].gsx$_cn6ca.$t);
    $(".pv0065").append('wikipedia pv: ' + json.feed.entry[64].gsx$_cokwr.$t);
    $(".change0065").append('前週比: ' + json.feed.entry[64].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[64].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0065").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0065").addClass("card-bg-down");
    }
    else{
    $(".card0065").addClass("card-bg-up");
    }
    }

    $(".name0066").append(json.feed.entry[65].gsx$_cn6ca.$t);
    $(".pv0066").append('wikipedia pv: ' + json.feed.entry[65].gsx$_cokwr.$t);
    $(".change0066").append('前週比: ' + json.feed.entry[65].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[65].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0066").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0066").addClass("card-bg-down");
    }
    else{
    $(".card0066").addClass("card-bg-up");
    }
    }

    $(".name0067").append(json.feed.entry[66].gsx$_cn6ca.$t);
    $(".pv0067").append('wikipedia pv: ' + json.feed.entry[66].gsx$_cokwr.$t);
    $(".change0067").append('前週比: ' + json.feed.entry[66].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[66].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0067").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0067").addClass("card-bg-down");
    }
    else{
    $(".card0067").addClass("card-bg-up");
    }
    }

    $(".name0068").append(json.feed.entry[67].gsx$_cn6ca.$t);
    $(".pv0068").append('wikipedia pv: ' + json.feed.entry[67].gsx$_cokwr.$t);
    $(".change0068").append('前週比: ' + json.feed.entry[67].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[67].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0068").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0068").addClass("card-bg-down");
    }
    else{
    $(".card0068").addClass("card-bg-up");
    }
    }

    $(".name0069").append(json.feed.entry[68].gsx$_cn6ca.$t);
    $(".pv0069").append('wikipedia pv: ' + json.feed.entry[68].gsx$_cokwr.$t);
    $(".change0069").append('前週比: ' + json.feed.entry[68].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[68].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0069").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0069").addClass("card-bg-down");
    }
    else{
    $(".card0069").addClass("card-bg-up");
    }
    }

    $(".name0070").append(json.feed.entry[69].gsx$_cn6ca.$t);
    $(".pv0070").append('wikipedia pv: ' + json.feed.entry[69].gsx$_cokwr.$t);
    $(".change0070").append('前週比: ' + json.feed.entry[69].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[69].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0070").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0070").addClass("card-bg-down");
    }
    else{
    $(".card0070").addClass("card-bg-up");
    }
    }

    $(".name0071").append(json.feed.entry[70].gsx$_cn6ca.$t);
    $(".pv0071").append('wikipedia pv: ' + json.feed.entry[70].gsx$_cokwr.$t);
    $(".change0071").append('前週比: ' + json.feed.entry[70].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[70].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0071").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0071").addClass("card-bg-down");
    }
    else{
    $(".card0071").addClass("card-bg-up");
    }
    }

    $(".name0072").append(json.feed.entry[71].gsx$_cn6ca.$t);
    $(".pv0072").append('wikipedia pv: ' + json.feed.entry[71].gsx$_cokwr.$t);
    $(".change0072").append('前週比: ' + json.feed.entry[71].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[71].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0072").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0072").addClass("card-bg-down");
    }
    else{
    $(".card0072").addClass("card-bg-up");
    }
    }

    $(".name0073").append(json.feed.entry[72].gsx$_cn6ca.$t);
    $(".pv0073").append('wikipedia pv: ' + json.feed.entry[72].gsx$_cokwr.$t);
    $(".change0073").append('前週比: ' + json.feed.entry[72].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[72].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0073").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0073").addClass("card-bg-down");
    }
    else{
    $(".card0073").addClass("card-bg-up");
    }
    }

    $(".name0074").append(json.feed.entry[73].gsx$_cn6ca.$t);
    $(".pv0074").append('wikipedia pv: ' + json.feed.entry[73].gsx$_cokwr.$t);
    $(".change0074").append('前週比: ' + json.feed.entry[73].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[73].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0074").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0074").addClass("card-bg-down");
    }
    else{
    $(".card0074").addClass("card-bg-up");
    }
    }

    $(".name0075").append(json.feed.entry[74].gsx$_cn6ca.$t);
    $(".pv0075").append('wikipedia pv: ' + json.feed.entry[74].gsx$_cokwr.$t);
    $(".change0075").append('前週比: ' + json.feed.entry[74].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[74].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0075").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0075").addClass("card-bg-down");
    }
    else{
    $(".card0075").addClass("card-bg-up");
    }
    }

    $(".name0076").append(json.feed.entry[75].gsx$_cn6ca.$t);
    $(".pv0076").append('wikipedia pv: ' + json.feed.entry[75].gsx$_cokwr.$t);
    $(".change0076").append('前週比: ' + json.feed.entry[75].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[75].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0076").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0076").addClass("card-bg-down");
    }
    else{
    $(".card0076").addClass("card-bg-up");
    }
    }

    $(".name0077").append(json.feed.entry[76].gsx$_cn6ca.$t);
    $(".pv0077").append('wikipedia pv: ' + json.feed.entry[76].gsx$_cokwr.$t);
    $(".change0077").append('前週比: ' + json.feed.entry[76].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[76].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0077").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0077").addClass("card-bg-down");
    }
    else{
    $(".card0077").addClass("card-bg-up");
    }
    }

    $(".name0078").append(json.feed.entry[77].gsx$_cn6ca.$t);
    $(".pv0078").append('wikipedia pv: ' + json.feed.entry[77].gsx$_cokwr.$t);
    $(".change0078").append('前週比: ' + json.feed.entry[77].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[77].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0078").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0078").addClass("card-bg-down");
    }
    else{
    $(".card0078").addClass("card-bg-up");
    }
    }

    $(".name0079").append(json.feed.entry[78].gsx$_cn6ca.$t);
    $(".pv0079").append('wikipedia pv: ' + json.feed.entry[78].gsx$_cokwr.$t);
    $(".change0079").append('前週比: ' + json.feed.entry[78].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[78].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0079").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0079").addClass("card-bg-down");
    }
    else{
    $(".card0079").addClass("card-bg-up");
    }
    }

    $(".name0080").append(json.feed.entry[79].gsx$_cn6ca.$t);
    $(".pv0080").append('wikipedia pv: ' + json.feed.entry[79].gsx$_cokwr.$t);
    $(".change0080").append('前週比: ' + json.feed.entry[79].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[79].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0080").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0080").addClass("card-bg-down");
    }
    else{
    $(".card0080").addClass("card-bg-up");
    }
    }

    $(".name0081").append(json.feed.entry[80].gsx$_cn6ca.$t);
    $(".pv0081").append('wikipedia pv: ' + json.feed.entry[80].gsx$_cokwr.$t);
    $(".change0081").append('前週比: ' + json.feed.entry[80].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[80].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0081").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0081").addClass("card-bg-down");
    }
    else{
    $(".card0081").addClass("card-bg-up");
    }
    }

    $(".name0082").append(json.feed.entry[81].gsx$_cn6ca.$t);
    $(".pv0082").append('wikipedia pv: ' + json.feed.entry[81].gsx$_cokwr.$t);
    $(".change0082").append('前週比: ' + json.feed.entry[81].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[81].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0082").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0082").addClass("card-bg-down");
    }
    else{
    $(".card0082").addClass("card-bg-up");
    }
    }

    $(".name0083").append(json.feed.entry[82].gsx$_cn6ca.$t);
    $(".pv0083").append('wikipedia pv: ' + json.feed.entry[82].gsx$_cokwr.$t);
    $(".change0083").append('前週比: ' + json.feed.entry[82].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[82].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0083").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0083").addClass("card-bg-down");
    }
    else{
    $(".card0083").addClass("card-bg-up");
    }
    }

    $(".name0084").append(json.feed.entry[83].gsx$_cn6ca.$t);
    $(".pv0084").append('wikipedia pv: ' + json.feed.entry[83].gsx$_cokwr.$t);
    $(".change0084").append('前週比: ' + json.feed.entry[83].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[83].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0084").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0084").addClass("card-bg-down");
    }
    else{
    $(".card0084").addClass("card-bg-up");
    }
    }

    $(".name0085").append(json.feed.entry[84].gsx$_cn6ca.$t);
    $(".pv0085").append('wikipedia pv: ' + json.feed.entry[84].gsx$_cokwr.$t);
    $(".change0085").append('前週比: ' + json.feed.entry[84].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[84].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0085").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0085").addClass("card-bg-down");
    }
    else{
    $(".card0085").addClass("card-bg-up");
    }
    }

    $(".name0086").append(json.feed.entry[85].gsx$_cn6ca.$t);
    $(".pv0086").append('wikipedia pv: ' + json.feed.entry[85].gsx$_cokwr.$t);
    $(".change0086").append('前週比: ' + json.feed.entry[85].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[85].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0086").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0086").addClass("card-bg-down");
    }
    else{
    $(".card0086").addClass("card-bg-up");
    }
    }

    $(".name0087").append(json.feed.entry[86].gsx$_cn6ca.$t);
    $(".pv0087").append('wikipedia pv: ' + json.feed.entry[86].gsx$_cokwr.$t);
    $(".change0087").append('前週比: ' + json.feed.entry[86].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[86].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0087").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0087").addClass("card-bg-down");
    }
    else{
    $(".card0087").addClass("card-bg-up");
    }
    }

    $(".name0088").append(json.feed.entry[87].gsx$_cn6ca.$t);
    $(".pv0088").append('wikipedia pv: ' + json.feed.entry[87].gsx$_cokwr.$t);
    $(".change0088").append('前週比: ' + json.feed.entry[87].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[87].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0088").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0088").addClass("card-bg-down");
    }
    else{
    $(".card0088").addClass("card-bg-up");
    }
    }

    $(".name0089").append(json.feed.entry[88].gsx$_cn6ca.$t);
    $(".pv0089").append('wikipedia pv: ' + json.feed.entry[88].gsx$_cokwr.$t);
    $(".change0089").append('前週比: ' + json.feed.entry[88].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[88].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0089").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0089").addClass("card-bg-down");
    }
    else{
    $(".card0089").addClass("card-bg-up");
    }
    }

    $(".name0090").append(json.feed.entry[89].gsx$_cn6ca.$t);
    $(".pv0090").append('wikipedia pv: ' + json.feed.entry[89].gsx$_cokwr.$t);
    $(".change0090").append('前週比: ' + json.feed.entry[89].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[89].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0090").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0090").addClass("card-bg-down");
    }
    else{
    $(".card0090").addClass("card-bg-up");
    }
    }

    $(".name0091").append(json.feed.entry[90].gsx$_cn6ca.$t);
    $(".pv0091").append('wikipedia pv: ' + json.feed.entry[90].gsx$_cokwr.$t);
    $(".change0091").append('前週比: ' + json.feed.entry[90].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[90].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0091").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0091").addClass("card-bg-down");
    }
    else{
    $(".card0091").addClass("card-bg-up");
    }
    }

    $(".name0092").append(json.feed.entry[91].gsx$_cn6ca.$t);
    $(".pv0092").append('wikipedia pv: ' + json.feed.entry[91].gsx$_cokwr.$t);
    $(".change0092").append('前週比: ' + json.feed.entry[91].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[91].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0092").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0092").addClass("card-bg-down");
    }
    else{
    $(".card0092").addClass("card-bg-up");
    }
    }

    $(".name0093").append(json.feed.entry[92].gsx$_cn6ca.$t);
    $(".pv0093").append('wikipedia pv: ' + json.feed.entry[92].gsx$_cokwr.$t);
    $(".change0093").append('前週比: ' + json.feed.entry[92].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[92].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0093").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0093").addClass("card-bg-down");
    }
    else{
    $(".card0093").addClass("card-bg-up");
    }
    }

    $(".name0094").append(json.feed.entry[93].gsx$_cn6ca.$t);
    $(".pv0094").append('wikipedia pv: ' + json.feed.entry[93].gsx$_cokwr.$t);
    $(".change0094").append('前週比: ' + json.feed.entry[93].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[93].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0094").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0094").addClass("card-bg-down");
    }
    else{
    $(".card0094").addClass("card-bg-up");
    }
    }

    $(".name0095").append(json.feed.entry[94].gsx$_cn6ca.$t);
    $(".pv0095").append('wikipedia pv: ' + json.feed.entry[94].gsx$_cokwr.$t);
    $(".change0095").append('前週比: ' + json.feed.entry[94].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[94].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0095").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0095").addClass("card-bg-down");
    }
    else{
    $(".card0095").addClass("card-bg-up");
    }
    }

    $(".name0096").append(json.feed.entry[95].gsx$_cn6ca.$t);
    $(".pv0096").append('wikipedia pv: ' + json.feed.entry[95].gsx$_cokwr.$t);
    $(".change0096").append('前週比: ' + json.feed.entry[95].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[95].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0096").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0096").addClass("card-bg-down");
    }
    else{
    $(".card0096").addClass("card-bg-up");
    }
    }

    $(".name0097").append(json.feed.entry[96].gsx$_cn6ca.$t);
    $(".pv0097").append('wikipedia pv: ' + json.feed.entry[96].gsx$_cokwr.$t);
    $(".change0097").append('前週比: ' + json.feed.entry[96].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[96].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0097").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0097").addClass("card-bg-down");
    }
    else{
    $(".card0097").addClass("card-bg-up");
    }
    }

    $(".name0098").append(json.feed.entry[97].gsx$_cn6ca.$t);
    $(".pv0098").append('wikipedia pv: ' + json.feed.entry[97].gsx$_cokwr.$t);
    $(".change0098").append('前週比: ' + json.feed.entry[97].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[97].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0098").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0098").addClass("card-bg-down");
    }
    else{
    $(".card0098").addClass("card-bg-up");
    }
    }

    $(".name0099").append(json.feed.entry[98].gsx$_cn6ca.$t);
    $(".pv0099").append('wikipedia pv: ' + json.feed.entry[98].gsx$_cokwr.$t);
    $(".change0099").append('前週比: ' + json.feed.entry[98].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[98].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0099").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0099").addClass("card-bg-down");
    }
    else{
    $(".card0099").addClass("card-bg-up");
    }
    }

    $(".name0100").append(json.feed.entry[99].gsx$_cn6ca.$t);
    $(".pv0100").append('wikipedia pv: ' + json.feed.entry[99].gsx$_cokwr.$t);
    $(".change0100").append('前週比: ' + json.feed.entry[99].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[99].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0100").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0100").addClass("card-bg-down");
    }
    else{
    $(".card0100").addClass("card-bg-up");
    }
    }

    $(".name0101").append(json.feed.entry[100].gsx$_cn6ca.$t);
    $(".pv0101").append('wikipedia pv: ' + json.feed.entry[100].gsx$_cokwr.$t);
    $(".change0101").append('前週比: ' + json.feed.entry[100].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[100].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0101").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0101").addClass("card-bg-down");
    }
    else{
    $(".card0101").addClass("card-bg-up");
    }
    }

    $(".name0102").append(json.feed.entry[101].gsx$_cn6ca.$t);
    $(".pv0102").append('wikipedia pv: ' + json.feed.entry[101].gsx$_cokwr.$t);
    $(".change0102").append('前週比: ' + json.feed.entry[101].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[101].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0102").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0102").addClass("card-bg-down");
    }
    else{
    $(".card0102").addClass("card-bg-up");
    }
    }

    $(".name0103").append(json.feed.entry[102].gsx$_cn6ca.$t);
    $(".pv0103").append('wikipedia pv: ' + json.feed.entry[102].gsx$_cokwr.$t);
    $(".change0103").append('前週比: ' + json.feed.entry[102].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[102].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0103").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0103").addClass("card-bg-down");
    }
    else{
    $(".card0103").addClass("card-bg-up");
    }
    }

    $(".name0104").append(json.feed.entry[103].gsx$_cn6ca.$t);
    $(".pv0104").append('wikipedia pv: ' + json.feed.entry[103].gsx$_cokwr.$t);
    $(".change0104").append('前週比: ' + json.feed.entry[103].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[103].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0104").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0104").addClass("card-bg-down");
    }
    else{
    $(".card0104").addClass("card-bg-up");
    }
    }

    $(".name0105").append(json.feed.entry[104].gsx$_cn6ca.$t);
    $(".pv0105").append('wikipedia pv: ' + json.feed.entry[104].gsx$_cokwr.$t);
    $(".change0105").append('前週比: ' + json.feed.entry[104].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[104].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0105").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0105").addClass("card-bg-down");
    }
    else{
    $(".card0105").addClass("card-bg-up");
    }
    }

    $(".name0106").append(json.feed.entry[105].gsx$_cn6ca.$t);
    $(".pv0106").append('wikipedia pv: ' + json.feed.entry[105].gsx$_cokwr.$t);
    $(".change0106").append('前週比: ' + json.feed.entry[105].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[105].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0106").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0106").addClass("card-bg-down");
    }
    else{
    $(".card0106").addClass("card-bg-up");
    }
    }

    $(".name0107").append(json.feed.entry[106].gsx$_cn6ca.$t);
    $(".pv0107").append('wikipedia pv: ' + json.feed.entry[106].gsx$_cokwr.$t);
    $(".change0107").append('前週比: ' + json.feed.entry[106].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[106].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0107").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0107").addClass("card-bg-down");
    }
    else{
    $(".card0107").addClass("card-bg-up");
    }
    }

    $(".name0108").append(json.feed.entry[107].gsx$_cn6ca.$t);
    $(".pv0108").append('wikipedia pv: ' + json.feed.entry[107].gsx$_cokwr.$t);
    $(".change0108").append('前週比: ' + json.feed.entry[107].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[107].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0108").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0108").addClass("card-bg-down");
    }
    else{
    $(".card0108").addClass("card-bg-up");
    }
    }

    $(".name0109").append(json.feed.entry[108].gsx$_cn6ca.$t);
    $(".pv0109").append('wikipedia pv: ' + json.feed.entry[108].gsx$_cokwr.$t);
    $(".change0109").append('前週比: ' + json.feed.entry[108].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[108].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0109").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0109").addClass("card-bg-down");
    }
    else{
    $(".card0109").addClass("card-bg-up");
    }
    }

    $(".name0110").append(json.feed.entry[109].gsx$_cn6ca.$t);
    $(".pv0110").append('wikipedia pv: ' + json.feed.entry[109].gsx$_cokwr.$t);
    $(".change0110").append('前週比: ' + json.feed.entry[109].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[109].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0110").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0110").addClass("card-bg-down");
    }
    else{
    $(".card0110").addClass("card-bg-up");
    }
    }

    $(".name0111").append(json.feed.entry[110].gsx$_cn6ca.$t);
    $(".pv0111").append('wikipedia pv: ' + json.feed.entry[110].gsx$_cokwr.$t);
    $(".change0111").append('前週比: ' + json.feed.entry[110].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[110].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0111").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0111").addClass("card-bg-down");
    }
    else{
    $(".card0111").addClass("card-bg-up");
    }
    }

    $(".name0112").append(json.feed.entry[111].gsx$_cn6ca.$t);
    $(".pv0112").append('wikipedia pv: ' + json.feed.entry[111].gsx$_cokwr.$t);
    $(".change0112").append('前週比: ' + json.feed.entry[111].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[111].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0112").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0112").addClass("card-bg-down");
    }
    else{
    $(".card0112").addClass("card-bg-up");
    }
    }

    $(".name0113").append(json.feed.entry[112].gsx$_cn6ca.$t);
    $(".pv0113").append('wikipedia pv: ' + json.feed.entry[112].gsx$_cokwr.$t);
    $(".change0113").append('前週比: ' + json.feed.entry[112].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[112].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0113").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0113").addClass("card-bg-down");
    }
    else{
    $(".card0113").addClass("card-bg-up");
    }
    }

    $(".name0114").append(json.feed.entry[113].gsx$_cn6ca.$t);
    $(".pv0114").append('wikipedia pv: ' + json.feed.entry[113].gsx$_cokwr.$t);
    $(".change0114").append('前週比: ' + json.feed.entry[113].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[113].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0114").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0114").addClass("card-bg-down");
    }
    else{
    $(".card0114").addClass("card-bg-up");
    }
    }

    $(".name0115").append(json.feed.entry[114].gsx$_cn6ca.$t);
    $(".pv0115").append('wikipedia pv: ' + json.feed.entry[114].gsx$_cokwr.$t);
    $(".change0115").append('前週比: ' + json.feed.entry[114].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[114].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0115").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0115").addClass("card-bg-down");
    }
    else{
    $(".card0115").addClass("card-bg-up");
    }
    }

    $(".name0116").append(json.feed.entry[115].gsx$_cn6ca.$t);
    $(".pv0116").append('wikipedia pv: ' + json.feed.entry[115].gsx$_cokwr.$t);
    $(".change0116").append('前週比: ' + json.feed.entry[115].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[115].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0116").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0116").addClass("card-bg-down");
    }
    else{
    $(".card0116").addClass("card-bg-up");
    }
    }

    $(".name0117").append(json.feed.entry[116].gsx$_cn6ca.$t);
    $(".pv0117").append('wikipedia pv: ' + json.feed.entry[116].gsx$_cokwr.$t);
    $(".change0117").append('前週比: ' + json.feed.entry[116].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[116].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0117").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0117").addClass("card-bg-down");
    }
    else{
    $(".card0117").addClass("card-bg-up");
    }
    }

    $(".name0118").append(json.feed.entry[117].gsx$_cn6ca.$t);
    $(".pv0118").append('wikipedia pv: ' + json.feed.entry[117].gsx$_cokwr.$t);
    $(".change0118").append('前週比: ' + json.feed.entry[117].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[117].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0118").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0118").addClass("card-bg-down");
    }
    else{
    $(".card0118").addClass("card-bg-up");
    }
    }

    $(".name0119").append(json.feed.entry[118].gsx$_cn6ca.$t);
    $(".pv0119").append('wikipedia pv: ' + json.feed.entry[118].gsx$_cokwr.$t);
    $(".change0119").append('前週比: ' + json.feed.entry[118].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[118].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0119").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0119").addClass("card-bg-down");
    }
    else{
    $(".card0119").addClass("card-bg-up");
    }
    }

    $(".name0120").append(json.feed.entry[119].gsx$_cn6ca.$t);
    $(".pv0120").append('wikipedia pv: ' + json.feed.entry[119].gsx$_cokwr.$t);
    $(".change0120").append('前週比: ' + json.feed.entry[119].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[119].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0120").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0120").addClass("card-bg-down");
    }
    else{
    $(".card0120").addClass("card-bg-up");
    }
    }

    $(".name0121").append(json.feed.entry[120].gsx$_cn6ca.$t);
    $(".pv0121").append('wikipedia pv: ' + json.feed.entry[120].gsx$_cokwr.$t);
    $(".change0121").append('前週比: ' + json.feed.entry[120].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[120].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0121").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0121").addClass("card-bg-down");
    }
    else{
    $(".card0121").addClass("card-bg-up");
    }
    }

    $(".name0122").append(json.feed.entry[121].gsx$_cn6ca.$t);
    $(".pv0122").append('wikipedia pv: ' + json.feed.entry[121].gsx$_cokwr.$t);
    $(".change0122").append('前週比: ' + json.feed.entry[121].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[121].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0122").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0122").addClass("card-bg-down");
    }
    else{
    $(".card0122").addClass("card-bg-up");
    }
    }

    $(".name0123").append(json.feed.entry[122].gsx$_cn6ca.$t);
    $(".pv0123").append('wikipedia pv: ' + json.feed.entry[122].gsx$_cokwr.$t);
    $(".change0123").append('前週比: ' + json.feed.entry[122].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[122].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0123").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0123").addClass("card-bg-down");
    }
    else{
    $(".card0123").addClass("card-bg-up");
    }
    }

    $(".name0124").append(json.feed.entry[123].gsx$_cn6ca.$t);
    $(".pv0124").append('wikipedia pv: ' + json.feed.entry[123].gsx$_cokwr.$t);
    $(".change0124").append('前週比: ' + json.feed.entry[123].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[123].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0124").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0124").addClass("card-bg-down");
    }
    else{
    $(".card0124").addClass("card-bg-up");
    }
    }

    $(".name0125").append(json.feed.entry[124].gsx$_cn6ca.$t);
    $(".pv0125").append('wikipedia pv: ' + json.feed.entry[124].gsx$_cokwr.$t);
    $(".change0125").append('前週比: ' + json.feed.entry[124].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[124].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0125").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0125").addClass("card-bg-down");
    }
    else{
    $(".card0125").addClass("card-bg-up");
    }
    }

    $(".name0126").append(json.feed.entry[125].gsx$_cn6ca.$t);
    $(".pv0126").append('wikipedia pv: ' + json.feed.entry[125].gsx$_cokwr.$t);
    $(".change0126").append('前週比: ' + json.feed.entry[125].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[125].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0126").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0126").addClass("card-bg-down");
    }
    else{
    $(".card0126").addClass("card-bg-up");
    }
    }

    $(".name0127").append(json.feed.entry[126].gsx$_cn6ca.$t);
    $(".pv0127").append('wikipedia pv: ' + json.feed.entry[126].gsx$_cokwr.$t);
    $(".change0127").append('前週比: ' + json.feed.entry[126].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[126].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0127").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0127").addClass("card-bg-down");
    }
    else{
    $(".card0127").addClass("card-bg-up");
    }
    }

    $(".name0128").append(json.feed.entry[127].gsx$_cn6ca.$t);
    $(".pv0128").append('wikipedia pv: ' + json.feed.entry[127].gsx$_cokwr.$t);
    $(".change0128").append('前週比: ' + json.feed.entry[127].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[127].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0128").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0128").addClass("card-bg-down");
    }
    else{
    $(".card0128").addClass("card-bg-up");
    }
    }

    $(".name0129").append(json.feed.entry[128].gsx$_cn6ca.$t);
    $(".pv0129").append('wikipedia pv: ' + json.feed.entry[128].gsx$_cokwr.$t);
    $(".change0129").append('前週比: ' + json.feed.entry[128].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[128].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0129").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0129").addClass("card-bg-down");
    }
    else{
    $(".card0129").addClass("card-bg-up");
    }
    }

    $(".name0130").append(json.feed.entry[129].gsx$_cn6ca.$t);
    $(".pv0130").append('wikipedia pv: ' + json.feed.entry[129].gsx$_cokwr.$t);
    $(".change0130").append('前週比: ' + json.feed.entry[129].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[129].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0130").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0130").addClass("card-bg-down");
    }
    else{
    $(".card0130").addClass("card-bg-up");
    }
    }

    $(".name0131").append(json.feed.entry[130].gsx$_cn6ca.$t);
    $(".pv0131").append('wikipedia pv: ' + json.feed.entry[130].gsx$_cokwr.$t);
    $(".change0131").append('前週比: ' + json.feed.entry[130].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[130].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0131").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0131").addClass("card-bg-down");
    }
    else{
    $(".card0131").addClass("card-bg-up");
    }
    }

    $(".name0132").append(json.feed.entry[131].gsx$_cn6ca.$t);
    $(".pv0132").append('wikipedia pv: ' + json.feed.entry[131].gsx$_cokwr.$t);
    $(".change0132").append('前週比: ' + json.feed.entry[131].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[131].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0132").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0132").addClass("card-bg-down");
    }
    else{
    $(".card0132").addClass("card-bg-up");
    }
    }

    $(".name0133").append(json.feed.entry[132].gsx$_cn6ca.$t);
    $(".pv0133").append('wikipedia pv: ' + json.feed.entry[132].gsx$_cokwr.$t);
    $(".change0133").append('前週比: ' + json.feed.entry[132].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[132].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0133").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0133").addClass("card-bg-down");
    }
    else{
    $(".card0133").addClass("card-bg-up");
    }
    }

    $(".name0134").append(json.feed.entry[133].gsx$_cn6ca.$t);
    $(".pv0134").append('wikipedia pv: ' + json.feed.entry[133].gsx$_cokwr.$t);
    $(".change0134").append('前週比: ' + json.feed.entry[133].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[133].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0134").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0134").addClass("card-bg-down");
    }
    else{
    $(".card0134").addClass("card-bg-up");
    }
    }

    $(".name0135").append(json.feed.entry[134].gsx$_cn6ca.$t);
    $(".pv0135").append('wikipedia pv: ' + json.feed.entry[134].gsx$_cokwr.$t);
    $(".change0135").append('前週比: ' + json.feed.entry[134].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[134].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0135").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0135").addClass("card-bg-down");
    }
    else{
    $(".card0135").addClass("card-bg-up");
    }
    }

    $(".name0136").append(json.feed.entry[135].gsx$_cn6ca.$t);
    $(".pv0136").append('wikipedia pv: ' + json.feed.entry[135].gsx$_cokwr.$t);
    $(".change0136").append('前週比: ' + json.feed.entry[135].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[135].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0136").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0136").addClass("card-bg-down");
    }
    else{
    $(".card0136").addClass("card-bg-up");
    }
    }

    $(".name0137").append(json.feed.entry[136].gsx$_cn6ca.$t);
    $(".pv0137").append('wikipedia pv: ' + json.feed.entry[136].gsx$_cokwr.$t);
    $(".change0137").append('前週比: ' + json.feed.entry[136].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[136].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0137").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0137").addClass("card-bg-down");
    }
    else{
    $(".card0137").addClass("card-bg-up");
    }
    }

    $(".name0138").append(json.feed.entry[137].gsx$_cn6ca.$t);
    $(".pv0138").append('wikipedia pv: ' + json.feed.entry[137].gsx$_cokwr.$t);
    $(".change0138").append('前週比: ' + json.feed.entry[137].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[137].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0138").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0138").addClass("card-bg-down");
    }
    else{
    $(".card0138").addClass("card-bg-up");
    }
    }

    $(".name0139").append(json.feed.entry[138].gsx$_cn6ca.$t);
    $(".pv0139").append('wikipedia pv: ' + json.feed.entry[138].gsx$_cokwr.$t);
    $(".change0139").append('前週比: ' + json.feed.entry[138].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[138].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0139").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0139").addClass("card-bg-down");
    }
    else{
    $(".card0139").addClass("card-bg-up");
    }
    }

    $(".name0140").append(json.feed.entry[139].gsx$_cn6ca.$t);
    $(".pv0140").append('wikipedia pv: ' + json.feed.entry[139].gsx$_cokwr.$t);
    $(".change0140").append('前週比: ' + json.feed.entry[139].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[139].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0140").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0140").addClass("card-bg-down");
    }
    else{
    $(".card0140").addClass("card-bg-up");
    }
    }

    $(".name0141").append(json.feed.entry[140].gsx$_cn6ca.$t);
    $(".pv0141").append('wikipedia pv: ' + json.feed.entry[140].gsx$_cokwr.$t);
    $(".change0141").append('前週比: ' + json.feed.entry[140].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[140].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0141").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0141").addClass("card-bg-down");
    }
    else{
    $(".card0141").addClass("card-bg-up");
    }
    }

    $(".name0142").append(json.feed.entry[141].gsx$_cn6ca.$t);
    $(".pv0142").append('wikipedia pv: ' + json.feed.entry[141].gsx$_cokwr.$t);
    $(".change0142").append('前週比: ' + json.feed.entry[141].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[141].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0142").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0142").addClass("card-bg-down");
    }
    else{
    $(".card0142").addClass("card-bg-up");
    }
    }

    $(".name0143").append(json.feed.entry[142].gsx$_cn6ca.$t);
    $(".pv0143").append('wikipedia pv: ' + json.feed.entry[142].gsx$_cokwr.$t);
    $(".change0143").append('前週比: ' + json.feed.entry[142].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[142].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0143").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0143").addClass("card-bg-down");
    }
    else{
    $(".card0143").addClass("card-bg-up");
    }
    }

    $(".name0144").append(json.feed.entry[143].gsx$_cn6ca.$t);
    $(".pv0144").append('wikipedia pv: ' + json.feed.entry[143].gsx$_cokwr.$t);
    $(".change0144").append('前週比: ' + json.feed.entry[143].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[143].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0144").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0144").addClass("card-bg-down");
    }
    else{
    $(".card0144").addClass("card-bg-up");
    }
    }

    $(".name0145").append(json.feed.entry[144].gsx$_cn6ca.$t);
    $(".pv0145").append('wikipedia pv: ' + json.feed.entry[144].gsx$_cokwr.$t);
    $(".change0145").append('前週比: ' + json.feed.entry[144].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[144].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0145").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0145").addClass("card-bg-down");
    }
    else{
    $(".card0145").addClass("card-bg-up");
    }
    }

    $(".name0146").append(json.feed.entry[145].gsx$_cn6ca.$t);
    $(".pv0146").append('wikipedia pv: ' + json.feed.entry[145].gsx$_cokwr.$t);
    $(".change0146").append('前週比: ' + json.feed.entry[145].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[145].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0146").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0146").addClass("card-bg-down");
    }
    else{
    $(".card0146").addClass("card-bg-up");
    }
    }

    $(".name0147").append(json.feed.entry[146].gsx$_cn6ca.$t);
    $(".pv0147").append('wikipedia pv: ' + json.feed.entry[146].gsx$_cokwr.$t);
    $(".change0147").append('前週比: ' + json.feed.entry[146].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[146].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0147").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0147").addClass("card-bg-down");
    }
    else{
    $(".card0147").addClass("card-bg-up");
    }
    }

    $(".name0148").append(json.feed.entry[147].gsx$_cn6ca.$t);
    $(".pv0148").append('wikipedia pv: ' + json.feed.entry[147].gsx$_cokwr.$t);
    $(".change0148").append('前週比: ' + json.feed.entry[147].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[147].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0148").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0148").addClass("card-bg-down");
    }
    else{
    $(".card0148").addClass("card-bg-up");
    }
    }

    $(".name0149").append(json.feed.entry[148].gsx$_cn6ca.$t);
    $(".pv0149").append('wikipedia pv: ' + json.feed.entry[148].gsx$_cokwr.$t);
    $(".change0149").append('前週比: ' + json.feed.entry[148].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[148].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0149").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0149").addClass("card-bg-down");
    }
    else{
    $(".card0149").addClass("card-bg-up");
    }
    }

    $(".name0150").append(json.feed.entry[149].gsx$_cn6ca.$t);
    $(".pv0150").append('wikipedia pv: ' + json.feed.entry[149].gsx$_cokwr.$t);
    $(".change0150").append('前週比: ' + json.feed.entry[149].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[149].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0150").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0150").addClass("card-bg-down");
    }
    else{
    $(".card0150").addClass("card-bg-up");
    }
    }

    $(".name0151").append(json.feed.entry[150].gsx$_cn6ca.$t);
    $(".pv0151").append('wikipedia pv: ' + json.feed.entry[150].gsx$_cokwr.$t);
    $(".change0151").append('前週比: ' + json.feed.entry[150].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[150].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0151").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0151").addClass("card-bg-down");
    }
    else{
    $(".card0151").addClass("card-bg-up");
    }
    }

    $(".name0152").append(json.feed.entry[151].gsx$_cn6ca.$t);
    $(".pv0152").append('wikipedia pv: ' + json.feed.entry[151].gsx$_cokwr.$t);
    $(".change0152").append('前週比: ' + json.feed.entry[151].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[151].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0152").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0152").addClass("card-bg-down");
    }
    else{
    $(".card0152").addClass("card-bg-up");
    }
    }

    $(".name0153").append(json.feed.entry[152].gsx$_cn6ca.$t);
    $(".pv0153").append('wikipedia pv: ' + json.feed.entry[152].gsx$_cokwr.$t);
    $(".change0153").append('前週比: ' + json.feed.entry[152].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[152].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0153").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0153").addClass("card-bg-down");
    }
    else{
    $(".card0153").addClass("card-bg-up");
    }
    }

    $(".name0154").append(json.feed.entry[153].gsx$_cn6ca.$t);
    $(".pv0154").append('wikipedia pv: ' + json.feed.entry[153].gsx$_cokwr.$t);
    $(".change0154").append('前週比: ' + json.feed.entry[153].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[153].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0154").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0154").addClass("card-bg-down");
    }
    else{
    $(".card0154").addClass("card-bg-up");
    }
    }

    $(".name0155").append(json.feed.entry[154].gsx$_cn6ca.$t);
    $(".pv0155").append('wikipedia pv: ' + json.feed.entry[154].gsx$_cokwr.$t);
    $(".change0155").append('前週比: ' + json.feed.entry[154].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[154].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0155").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0155").addClass("card-bg-down");
    }
    else{
    $(".card0155").addClass("card-bg-up");
    }
    }

    $(".name0156").append(json.feed.entry[155].gsx$_cn6ca.$t);
    $(".pv0156").append('wikipedia pv: ' + json.feed.entry[155].gsx$_cokwr.$t);
    $(".change0156").append('前週比: ' + json.feed.entry[155].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[155].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0156").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0156").addClass("card-bg-down");
    }
    else{
    $(".card0156").addClass("card-bg-up");
    }
    }

    $(".name0157").append(json.feed.entry[156].gsx$_cn6ca.$t);
    $(".pv0157").append('wikipedia pv: ' + json.feed.entry[156].gsx$_cokwr.$t);
    $(".change0157").append('前週比: ' + json.feed.entry[156].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[156].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0157").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0157").addClass("card-bg-down");
    }
    else{
    $(".card0157").addClass("card-bg-up");
    }
    }

    $(".name0158").append(json.feed.entry[157].gsx$_cn6ca.$t);
    $(".pv0158").append('wikipedia pv: ' + json.feed.entry[157].gsx$_cokwr.$t);
    $(".change0158").append('前週比: ' + json.feed.entry[157].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[157].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0158").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0158").addClass("card-bg-down");
    }
    else{
    $(".card0158").addClass("card-bg-up");
    }
    }

    $(".name0159").append(json.feed.entry[158].gsx$_cn6ca.$t);
    $(".pv0159").append('wikipedia pv: ' + json.feed.entry[158].gsx$_cokwr.$t);
    $(".change0159").append('前週比: ' + json.feed.entry[158].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[158].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0159").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0159").addClass("card-bg-down");
    }
    else{
    $(".card0159").addClass("card-bg-up");
    }
    }

    $(".name0160").append(json.feed.entry[159].gsx$_cn6ca.$t);
    $(".pv0160").append('wikipedia pv: ' + json.feed.entry[159].gsx$_cokwr.$t);
    $(".change0160").append('前週比: ' + json.feed.entry[159].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[159].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0160").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0160").addClass("card-bg-down");
    }
    else{
    $(".card0160").addClass("card-bg-up");
    }
    }

    $(".name0161").append(json.feed.entry[160].gsx$_cn6ca.$t);
    $(".pv0161").append('wikipedia pv: ' + json.feed.entry[160].gsx$_cokwr.$t);
    $(".change0161").append('前週比: ' + json.feed.entry[160].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[160].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0161").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0161").addClass("card-bg-down");
    }
    else{
    $(".card0161").addClass("card-bg-up");
    }
    }

    $(".name0162").append(json.feed.entry[161].gsx$_cn6ca.$t);
    $(".pv0162").append('wikipedia pv: ' + json.feed.entry[161].gsx$_cokwr.$t);
    $(".change0162").append('前週比: ' + json.feed.entry[161].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[161].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0162").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0162").addClass("card-bg-down");
    }
    else{
    $(".card0162").addClass("card-bg-up");
    }
    }

    $(".name0163").append(json.feed.entry[162].gsx$_cn6ca.$t);
    $(".pv0163").append('wikipedia pv: ' + json.feed.entry[162].gsx$_cokwr.$t);
    $(".change0163").append('前週比: ' + json.feed.entry[162].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[162].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0163").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0163").addClass("card-bg-down");
    }
    else{
    $(".card0163").addClass("card-bg-up");
    }
    }

    $(".name0164").append(json.feed.entry[163].gsx$_cn6ca.$t);
    $(".pv0164").append('wikipedia pv: ' + json.feed.entry[163].gsx$_cokwr.$t);
    $(".change0164").append('前週比: ' + json.feed.entry[163].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[163].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0164").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0164").addClass("card-bg-down");
    }
    else{
    $(".card0164").addClass("card-bg-up");
    }
    }

    $(".name0165").append(json.feed.entry[164].gsx$_cn6ca.$t);
    $(".pv0165").append('wikipedia pv: ' + json.feed.entry[164].gsx$_cokwr.$t);
    $(".change0165").append('前週比: ' + json.feed.entry[164].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[164].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0165").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0165").addClass("card-bg-down");
    }
    else{
    $(".card0165").addClass("card-bg-up");
    }
    }

    $(".name0166").append(json.feed.entry[165].gsx$_cn6ca.$t);
    $(".pv0166").append('wikipedia pv: ' + json.feed.entry[165].gsx$_cokwr.$t);
    $(".change0166").append('前週比: ' + json.feed.entry[165].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[165].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0166").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0166").addClass("card-bg-down");
    }
    else{
    $(".card0166").addClass("card-bg-up");
    }
    }

    $(".name0167").append(json.feed.entry[166].gsx$_cn6ca.$t);
    $(".pv0167").append('wikipedia pv: ' + json.feed.entry[166].gsx$_cokwr.$t);
    $(".change0167").append('前週比: ' + json.feed.entry[166].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[166].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0167").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0167").addClass("card-bg-down");
    }
    else{
    $(".card0167").addClass("card-bg-up");
    }
    }

    $(".name0168").append(json.feed.entry[167].gsx$_cn6ca.$t);
    $(".pv0168").append('wikipedia pv: ' + json.feed.entry[167].gsx$_cokwr.$t);
    $(".change0168").append('前週比: ' + json.feed.entry[167].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[167].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0168").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0168").addClass("card-bg-down");
    }
    else{
    $(".card0168").addClass("card-bg-up");
    }
    }

    $(".name0169").append(json.feed.entry[168].gsx$_cn6ca.$t);
    $(".pv0169").append('wikipedia pv: ' + json.feed.entry[168].gsx$_cokwr.$t);
    $(".change0169").append('前週比: ' + json.feed.entry[168].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[168].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0169").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0169").addClass("card-bg-down");
    }
    else{
    $(".card0169").addClass("card-bg-up");
    }
    }

    $(".name0170").append(json.feed.entry[169].gsx$_cn6ca.$t);
    $(".pv0170").append('wikipedia pv: ' + json.feed.entry[169].gsx$_cokwr.$t);
    $(".change0170").append('前週比: ' + json.feed.entry[169].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[169].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0170").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0170").addClass("card-bg-down");
    }
    else{
    $(".card0170").addClass("card-bg-up");
    }
    }

    $(".name0171").append(json.feed.entry[170].gsx$_cn6ca.$t);
    $(".pv0171").append('wikipedia pv: ' + json.feed.entry[170].gsx$_cokwr.$t);
    $(".change0171").append('前週比: ' + json.feed.entry[170].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[170].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0171").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0171").addClass("card-bg-down");
    }
    else{
    $(".card0171").addClass("card-bg-up");
    }
    }

    $(".name0172").append(json.feed.entry[171].gsx$_cn6ca.$t);
    $(".pv0172").append('wikipedia pv: ' + json.feed.entry[171].gsx$_cokwr.$t);
    $(".change0172").append('前週比: ' + json.feed.entry[171].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[171].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0172").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0172").addClass("card-bg-down");
    }
    else{
    $(".card0172").addClass("card-bg-up");
    }
    }

    $(".name0173").append(json.feed.entry[172].gsx$_cn6ca.$t);
    $(".pv0173").append('wikipedia pv: ' + json.feed.entry[172].gsx$_cokwr.$t);
    $(".change0173").append('前週比: ' + json.feed.entry[172].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[172].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0173").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0173").addClass("card-bg-down");
    }
    else{
    $(".card0173").addClass("card-bg-up");
    }
    }

    $(".name0174").append(json.feed.entry[173].gsx$_cn6ca.$t);
    $(".pv0174").append('wikipedia pv: ' + json.feed.entry[173].gsx$_cokwr.$t);
    $(".change0174").append('前週比: ' + json.feed.entry[173].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[173].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0174").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0174").addClass("card-bg-down");
    }
    else{
    $(".card0174").addClass("card-bg-up");
    }
    }

    $(".name0175").append(json.feed.entry[174].gsx$_cn6ca.$t);
    $(".pv0175").append('wikipedia pv: ' + json.feed.entry[174].gsx$_cokwr.$t);
    $(".change0175").append('前週比: ' + json.feed.entry[174].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[174].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0175").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0175").addClass("card-bg-down");
    }
    else{
    $(".card0175").addClass("card-bg-up");
    }
    }

    $(".name0176").append(json.feed.entry[175].gsx$_cn6ca.$t);
    $(".pv0176").append('wikipedia pv: ' + json.feed.entry[175].gsx$_cokwr.$t);
    $(".change0176").append('前週比: ' + json.feed.entry[175].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[175].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0176").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0176").addClass("card-bg-down");
    }
    else{
    $(".card0176").addClass("card-bg-up");
    }
    }

    $(".name0177").append(json.feed.entry[176].gsx$_cn6ca.$t);
    $(".pv0177").append('wikipedia pv: ' + json.feed.entry[176].gsx$_cokwr.$t);
    $(".change0177").append('前週比: ' + json.feed.entry[176].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[176].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0177").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0177").addClass("card-bg-down");
    }
    else{
    $(".card0177").addClass("card-bg-up");
    }
    }

    $(".name0178").append(json.feed.entry[177].gsx$_cn6ca.$t);
    $(".pv0178").append('wikipedia pv: ' + json.feed.entry[177].gsx$_cokwr.$t);
    $(".change0178").append('前週比: ' + json.feed.entry[177].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[177].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0178").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0178").addClass("card-bg-down");
    }
    else{
    $(".card0178").addClass("card-bg-up");
    }
    }

    $(".name0179").append(json.feed.entry[178].gsx$_cn6ca.$t);
    $(".pv0179").append('wikipedia pv: ' + json.feed.entry[178].gsx$_cokwr.$t);
    $(".change0179").append('前週比: ' + json.feed.entry[178].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[178].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0179").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0179").addClass("card-bg-down");
    }
    else{
    $(".card0179").addClass("card-bg-up");
    }
    }

    $(".name0180").append(json.feed.entry[179].gsx$_cn6ca.$t);
    $(".pv0180").append('wikipedia pv: ' + json.feed.entry[179].gsx$_cokwr.$t);
    $(".change0180").append('前週比: ' + json.feed.entry[179].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[179].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0180").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0180").addClass("card-bg-down");
    }
    else{
    $(".card0180").addClass("card-bg-up");
    }
    }

    $(".name0181").append(json.feed.entry[180].gsx$_cn6ca.$t);
    $(".pv0181").append('wikipedia pv: ' + json.feed.entry[180].gsx$_cokwr.$t);
    $(".change0181").append('前週比: ' + json.feed.entry[180].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[180].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0181").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0181").addClass("card-bg-down");
    }
    else{
    $(".card0181").addClass("card-bg-up");
    }
    }

    $(".name0182").append(json.feed.entry[181].gsx$_cn6ca.$t);
    $(".pv0182").append('wikipedia pv: ' + json.feed.entry[181].gsx$_cokwr.$t);
    $(".change0182").append('前週比: ' + json.feed.entry[181].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[181].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0182").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0182").addClass("card-bg-down");
    }
    else{
    $(".card0182").addClass("card-bg-up");
    }
    }

    $(".name0183").append(json.feed.entry[182].gsx$_cn6ca.$t);
    $(".pv0183").append('wikipedia pv: ' + json.feed.entry[182].gsx$_cokwr.$t);
    $(".change0183").append('前週比: ' + json.feed.entry[182].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[182].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0183").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0183").addClass("card-bg-down");
    }
    else{
    $(".card0183").addClass("card-bg-up");
    }
    }

    $(".name0184").append(json.feed.entry[183].gsx$_cn6ca.$t);
    $(".pv0184").append('wikipedia pv: ' + json.feed.entry[183].gsx$_cokwr.$t);
    $(".change0184").append('前週比: ' + json.feed.entry[183].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[183].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0184").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0184").addClass("card-bg-down");
    }
    else{
    $(".card0184").addClass("card-bg-up");
    }
    }

    $(".name0185").append(json.feed.entry[184].gsx$_cn6ca.$t);
    $(".pv0185").append('wikipedia pv: ' + json.feed.entry[184].gsx$_cokwr.$t);
    $(".change0185").append('前週比: ' + json.feed.entry[184].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[184].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0185").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0185").addClass("card-bg-down");
    }
    else{
    $(".card0185").addClass("card-bg-up");
    }
    }

    $(".name0186").append(json.feed.entry[185].gsx$_cn6ca.$t);
    $(".pv0186").append('wikipedia pv: ' + json.feed.entry[185].gsx$_cokwr.$t);
    $(".change0186").append('前週比: ' + json.feed.entry[185].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[185].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0186").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0186").addClass("card-bg-down");
    }
    else{
    $(".card0186").addClass("card-bg-up");
    }
    }

    $(".name0187").append(json.feed.entry[186].gsx$_cn6ca.$t);
    $(".pv0187").append('wikipedia pv: ' + json.feed.entry[186].gsx$_cokwr.$t);
    $(".change0187").append('前週比: ' + json.feed.entry[186].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[186].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0187").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0187").addClass("card-bg-down");
    }
    else{
    $(".card0187").addClass("card-bg-up");
    }
    }

    $(".name0188").append(json.feed.entry[187].gsx$_cn6ca.$t);
    $(".pv0188").append('wikipedia pv: ' + json.feed.entry[187].gsx$_cokwr.$t);
    $(".change0188").append('前週比: ' + json.feed.entry[187].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[187].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0188").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0188").addClass("card-bg-down");
    }
    else{
    $(".card0188").addClass("card-bg-up");
    }
    }

    $(".name0189").append(json.feed.entry[188].gsx$_cn6ca.$t);
    $(".pv0189").append('wikipedia pv: ' + json.feed.entry[188].gsx$_cokwr.$t);
    $(".change0189").append('前週比: ' + json.feed.entry[188].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[188].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0189").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0189").addClass("card-bg-down");
    }
    else{
    $(".card0189").addClass("card-bg-up");
    }
    }

    $(".name0190").append(json.feed.entry[189].gsx$_cn6ca.$t);
    $(".pv0190").append('wikipedia pv: ' + json.feed.entry[189].gsx$_cokwr.$t);
    $(".change0190").append('前週比: ' + json.feed.entry[189].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[189].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0190").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0190").addClass("card-bg-down");
    }
    else{
    $(".card0190").addClass("card-bg-up");
    }
    }

    $(".name0191").append(json.feed.entry[190].gsx$_cn6ca.$t);
    $(".pv0191").append('wikipedia pv: ' + json.feed.entry[190].gsx$_cokwr.$t);
    $(".change0191").append('前週比: ' + json.feed.entry[190].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[190].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0191").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0191").addClass("card-bg-down");
    }
    else{
    $(".card0191").addClass("card-bg-up");
    }
    }

    $(".name0192").append(json.feed.entry[191].gsx$_cn6ca.$t);
    $(".pv0192").append('wikipedia pv: ' + json.feed.entry[191].gsx$_cokwr.$t);
    $(".change0192").append('前週比: ' + json.feed.entry[191].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[191].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0192").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0192").addClass("card-bg-down");
    }
    else{
    $(".card0192").addClass("card-bg-up");
    }
    }

    $(".name0193").append(json.feed.entry[192].gsx$_cn6ca.$t);
    $(".pv0193").append('wikipedia pv: ' + json.feed.entry[192].gsx$_cokwr.$t);
    $(".change0193").append('前週比: ' + json.feed.entry[192].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[192].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0193").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0193").addClass("card-bg-down");
    }
    else{
    $(".card0193").addClass("card-bg-up");
    }
    }

    $(".name0194").append(json.feed.entry[193].gsx$_cn6ca.$t);
    $(".pv0194").append('wikipedia pv: ' + json.feed.entry[193].gsx$_cokwr.$t);
    $(".change0194").append('前週比: ' + json.feed.entry[193].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[193].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0194").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0194").addClass("card-bg-down");
    }
    else{
    $(".card0194").addClass("card-bg-up");
    }
    }

    $(".name0195").append(json.feed.entry[194].gsx$_cn6ca.$t);
    $(".pv0195").append('wikipedia pv: ' + json.feed.entry[194].gsx$_cokwr.$t);
    $(".change0195").append('前週比: ' + json.feed.entry[194].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[194].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0195").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0195").addClass("card-bg-down");
    }
    else{
    $(".card0195").addClass("card-bg-up");
    }
    }

    $(".name0196").append(json.feed.entry[195].gsx$_cn6ca.$t);
    $(".pv0196").append('wikipedia pv: ' + json.feed.entry[195].gsx$_cokwr.$t);
    $(".change0196").append('前週比: ' + json.feed.entry[195].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[195].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0196").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0196").addClass("card-bg-down");
    }
    else{
    $(".card0196").addClass("card-bg-up");
    }
    }

    $(".name0197").append(json.feed.entry[196].gsx$_cn6ca.$t);
    $(".pv0197").append('wikipedia pv: ' + json.feed.entry[196].gsx$_cokwr.$t);
    $(".change0197").append('前週比: ' + json.feed.entry[196].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[196].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0197").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0197").addClass("card-bg-down");
    }
    else{
    $(".card0197").addClass("card-bg-up");
    }
    }

    $(".name0198").append(json.feed.entry[197].gsx$_cn6ca.$t);
    $(".pv0198").append('wikipedia pv: ' + json.feed.entry[197].gsx$_cokwr.$t);
    $(".change0198").append('前週比: ' + json.feed.entry[197].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[197].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0198").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0198").addClass("card-bg-down");
    }
    else{
    $(".card0198").addClass("card-bg-up");
    }
    }

    $(".name0199").append(json.feed.entry[198].gsx$_cn6ca.$t);
    $(".pv0199").append('wikipedia pv: ' + json.feed.entry[198].gsx$_cokwr.$t);
    $(".change0199").append('前週比: ' + json.feed.entry[198].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[198].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0199").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0199").addClass("card-bg-down");
    }
    else{
    $(".card0199").addClass("card-bg-up");
    }
    }

    $(".name0200").append(json.feed.entry[199].gsx$_cn6ca.$t);
    $(".pv0200").append('wikipedia pv: ' + json.feed.entry[199].gsx$_cokwr.$t);
    $(".change0200").append('前週比: ' + json.feed.entry[199].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[199].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0200").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0200").addClass("card-bg-down");
    }
    else{
    $(".card0200").addClass("card-bg-up");
    }
    }

    $(".name0201").append(json.feed.entry[200].gsx$_cn6ca.$t);
    $(".pv0201").append('wikipedia pv: ' + json.feed.entry[200].gsx$_cokwr.$t);
    $(".change0201").append('前週比: ' + json.feed.entry[200].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[200].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0201").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0201").addClass("card-bg-down");
    }
    else{
    $(".card0201").addClass("card-bg-up");
    }
    }

    $(".name0202").append(json.feed.entry[201].gsx$_cn6ca.$t);
    $(".pv0202").append('wikipedia pv: ' + json.feed.entry[201].gsx$_cokwr.$t);
    $(".change0202").append('前週比: ' + json.feed.entry[201].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[201].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0202").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0202").addClass("card-bg-down");
    }
    else{
    $(".card0202").addClass("card-bg-up");
    }
    }

    $(".name0203").append(json.feed.entry[202].gsx$_cn6ca.$t);
    $(".pv0203").append('wikipedia pv: ' + json.feed.entry[202].gsx$_cokwr.$t);
    $(".change0203").append('前週比: ' + json.feed.entry[202].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[202].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0203").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0203").addClass("card-bg-down");
    }
    else{
    $(".card0203").addClass("card-bg-up");
    }
    }

    $(".name0204").append(json.feed.entry[203].gsx$_cn6ca.$t);
    $(".pv0204").append('wikipedia pv: ' + json.feed.entry[203].gsx$_cokwr.$t);
    $(".change0204").append('前週比: ' + json.feed.entry[203].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[203].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0204").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0204").addClass("card-bg-down");
    }
    else{
    $(".card0204").addClass("card-bg-up");
    }
    }

    $(".name0205").append(json.feed.entry[204].gsx$_cn6ca.$t);
    $(".pv0205").append('wikipedia pv: ' + json.feed.entry[204].gsx$_cokwr.$t);
    $(".change0205").append('前週比: ' + json.feed.entry[204].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[204].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0205").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0205").addClass("card-bg-down");
    }
    else{
    $(".card0205").addClass("card-bg-up");
    }
    }

    $(".name0206").append(json.feed.entry[205].gsx$_cn6ca.$t);
    $(".pv0206").append('wikipedia pv: ' + json.feed.entry[205].gsx$_cokwr.$t);
    $(".change0206").append('前週比: ' + json.feed.entry[205].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[205].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0206").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0206").addClass("card-bg-down");
    }
    else{
    $(".card0206").addClass("card-bg-up");
    }
    }

    $(".name0207").append(json.feed.entry[206].gsx$_cn6ca.$t);
    $(".pv0207").append('wikipedia pv: ' + json.feed.entry[206].gsx$_cokwr.$t);
    $(".change0207").append('前週比: ' + json.feed.entry[206].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[206].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0207").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0207").addClass("card-bg-down");
    }
    else{
    $(".card0207").addClass("card-bg-up");
    }
    }

    $(".name0208").append(json.feed.entry[207].gsx$_cn6ca.$t);
    $(".pv0208").append('wikipedia pv: ' + json.feed.entry[207].gsx$_cokwr.$t);
    $(".change0208").append('前週比: ' + json.feed.entry[207].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[207].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0208").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0208").addClass("card-bg-down");
    }
    else{
    $(".card0208").addClass("card-bg-up");
    }
    }

    $(".name0209").append(json.feed.entry[208].gsx$_cn6ca.$t);
    $(".pv0209").append('wikipedia pv: ' + json.feed.entry[208].gsx$_cokwr.$t);
    $(".change0209").append('前週比: ' + json.feed.entry[208].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[208].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0209").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0209").addClass("card-bg-down");
    }
    else{
    $(".card0209").addClass("card-bg-up");
    }
    }

    $(".name0210").append(json.feed.entry[209].gsx$_cn6ca.$t);
    $(".pv0210").append('wikipedia pv: ' + json.feed.entry[209].gsx$_cokwr.$t);
    $(".change0210").append('前週比: ' + json.feed.entry[209].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[209].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0210").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0210").addClass("card-bg-down");
    }
    else{
    $(".card0210").addClass("card-bg-up");
    }
    }

    $(".name0211").append(json.feed.entry[210].gsx$_cn6ca.$t);
    $(".pv0211").append('wikipedia pv: ' + json.feed.entry[210].gsx$_cokwr.$t);
    $(".change0211").append('前週比: ' + json.feed.entry[210].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[210].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0211").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0211").addClass("card-bg-down");
    }
    else{
    $(".card0211").addClass("card-bg-up");
    }
    }

    $(".name0212").append(json.feed.entry[211].gsx$_cn6ca.$t);
    $(".pv0212").append('wikipedia pv: ' + json.feed.entry[211].gsx$_cokwr.$t);
    $(".change0212").append('前週比: ' + json.feed.entry[211].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[211].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0212").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0212").addClass("card-bg-down");
    }
    else{
    $(".card0212").addClass("card-bg-up");
    }
    }

    $(".name0213").append(json.feed.entry[212].gsx$_cn6ca.$t);
    $(".pv0213").append('wikipedia pv: ' + json.feed.entry[212].gsx$_cokwr.$t);
    $(".change0213").append('前週比: ' + json.feed.entry[212].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[212].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0213").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0213").addClass("card-bg-down");
    }
    else{
    $(".card0213").addClass("card-bg-up");
    }
    }

    $(".name0214").append(json.feed.entry[213].gsx$_cn6ca.$t);
    $(".pv0214").append('wikipedia pv: ' + json.feed.entry[213].gsx$_cokwr.$t);
    $(".change0214").append('前週比: ' + json.feed.entry[213].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[213].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0214").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0214").addClass("card-bg-down");
    }
    else{
    $(".card0214").addClass("card-bg-up");
    }
    }

    $(".name0215").append(json.feed.entry[214].gsx$_cn6ca.$t);
    $(".pv0215").append('wikipedia pv: ' + json.feed.entry[214].gsx$_cokwr.$t);
    $(".change0215").append('前週比: ' + json.feed.entry[214].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[214].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0215").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0215").addClass("card-bg-down");
    }
    else{
    $(".card0215").addClass("card-bg-up");
    }
    }

    $(".name0216").append(json.feed.entry[215].gsx$_cn6ca.$t);
    $(".pv0216").append('wikipedia pv: ' + json.feed.entry[215].gsx$_cokwr.$t);
    $(".change0216").append('前週比: ' + json.feed.entry[215].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[215].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0216").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0216").addClass("card-bg-down");
    }
    else{
    $(".card0216").addClass("card-bg-up");
    }
    }

    $(".name0217").append(json.feed.entry[216].gsx$_cn6ca.$t);
    $(".pv0217").append('wikipedia pv: ' + json.feed.entry[216].gsx$_cokwr.$t);
    $(".change0217").append('前週比: ' + json.feed.entry[216].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[216].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0217").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0217").addClass("card-bg-down");
    }
    else{
    $(".card0217").addClass("card-bg-up");
    }
    }

    $(".name0218").append(json.feed.entry[217].gsx$_cn6ca.$t);
    $(".pv0218").append('wikipedia pv: ' + json.feed.entry[217].gsx$_cokwr.$t);
    $(".change0218").append('前週比: ' + json.feed.entry[217].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[217].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0218").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0218").addClass("card-bg-down");
    }
    else{
    $(".card0218").addClass("card-bg-up");
    }
    }

    $(".name0219").append(json.feed.entry[218].gsx$_cn6ca.$t);
    $(".pv0219").append('wikipedia pv: ' + json.feed.entry[218].gsx$_cokwr.$t);
    $(".change0219").append('前週比: ' + json.feed.entry[218].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[218].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0219").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0219").addClass("card-bg-down");
    }
    else{
    $(".card0219").addClass("card-bg-up");
    }
    }

    $(".name0220").append(json.feed.entry[219].gsx$_cn6ca.$t);
    $(".pv0220").append('wikipedia pv: ' + json.feed.entry[219].gsx$_cokwr.$t);
    $(".change0220").append('前週比: ' + json.feed.entry[219].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[219].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0220").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0220").addClass("card-bg-down");
    }
    else{
    $(".card0220").addClass("card-bg-up");
    }
    }

    $(".name0221").append(json.feed.entry[220].gsx$_cn6ca.$t);
    $(".pv0221").append('wikipedia pv: ' + json.feed.entry[220].gsx$_cokwr.$t);
    $(".change0221").append('前週比: ' + json.feed.entry[220].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[220].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0221").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0221").addClass("card-bg-down");
    }
    else{
    $(".card0221").addClass("card-bg-up");
    }
    }

    $(".name0222").append(json.feed.entry[221].gsx$_cn6ca.$t);
    $(".pv0222").append('wikipedia pv: ' + json.feed.entry[221].gsx$_cokwr.$t);
    $(".change0222").append('前週比: ' + json.feed.entry[221].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[221].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0222").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0222").addClass("card-bg-down");
    }
    else{
    $(".card0222").addClass("card-bg-up");
    }
    }

    $(".name0223").append(json.feed.entry[222].gsx$_cn6ca.$t);
    $(".pv0223").append('wikipedia pv: ' + json.feed.entry[222].gsx$_cokwr.$t);
    $(".change0223").append('前週比: ' + json.feed.entry[222].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[222].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0223").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0223").addClass("card-bg-down");
    }
    else{
    $(".card0223").addClass("card-bg-up");
    }
    }

    $(".name0224").append(json.feed.entry[223].gsx$_cn6ca.$t);
    $(".pv0224").append('wikipedia pv: ' + json.feed.entry[223].gsx$_cokwr.$t);
    $(".change0224").append('前週比: ' + json.feed.entry[223].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[223].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0224").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0224").addClass("card-bg-down");
    }
    else{
    $(".card0224").addClass("card-bg-up");
    }
    }

    $(".name0225").append(json.feed.entry[224].gsx$_cn6ca.$t);
    $(".pv0225").append('wikipedia pv: ' + json.feed.entry[224].gsx$_cokwr.$t);
    $(".change0225").append('前週比: ' + json.feed.entry[224].gsx$_cpzh4.$t);
    var change_value = json.feed.entry[224].gsx$_cpzh4.$t.toString()
    if(change_value == "±0"){
    $(".card0225").addClass("card-bg-even");
    }
    else{
    if(change_value.indexOf('-') !== -1){
    $(".card0225").addClass("card-bg-down");
    }
    else{
    $(".card0225").addClass("card-bg-up");
    }
    }



  });
});
