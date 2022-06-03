import axios from "axios"
import React, { useEffect, useRef, useState } from "react"
import * as d3 from 'd3';
import { svg } from "d3";
import PageServiceProvider from "./dashboards/PageServiceProvider";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
const languages = [
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ger',
    name: 'deutsch',
    country_code: 'de',
  },
]
export const InspResults=(props)=>{
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()
    const inspection = props.location.state.data;
    var body;
    var y;
    var z;
    const [data,setData]=useState([{name:"yes",value:"",pourcentage:""},{name:"no",value:"",pourcentage:""},{name:"N/A",value:"",pourcentage:""}]);
    const pieChart = useRef()
    useEffect(()=>{
        
        if(inspection.type==="GAPAnalysis"){
            axios.get('http://localhost:8082/api/GAPAnalysisFormInsp/'+inspection.id).then(resp=>{
                const Form = resp.data
                    var yes = 0;
                    var no = 0;
                    var na = 0;
                    console.log(Form)
                    for(let i = 1; i<=51  ; i++){
                        if(Form["question"+i]=="Yes"){
                            yes=yes+1

                        }else if(Form["question"+i]=="No"){
                            no++
                        }else if(Form["question"+i]=="NA"){
                            na++
                        }
                    }
                    y =[{name:"yes",value:yes,pourcentage:((yes/51)*100).toFixed(2)},{name:"no",value:no,pourcentage:((no/51)*100).toFixed(2)},{name:"N/A",value:na,pourcentage:((na/51)*100).toFixed(2)}]
                    body=y;
                    console.log(y)
                    setData(y)
/////////////////////////////////////////////////////////////////////pie////////////////////////////////////////////////////////////////////////////
                    const piedata = d3.pie().value(d => d.value)(body)
        console.log(piedata)
		// Define arcs for graphing 
		const arc = d3.arc().innerRadius(0).outerRadius(200)

		const colors = d3.scaleOrdinal(['#26E07F','#FA314A','#ff6150'])

		// Define the size and position of svg
		const svg = d3.select(pieChart.current)
						.attr('width', 600)
						.attr('height', 600)
						// .style('background-color','yellow')
						.append('g')
							.attr('transform','translate(300,300)')

		// Add tooltip
		const tooldiv = d3.select('#chartArea')
						  .append('div')
						  .style('visibility','hidden')
						  .style('position','absolute')
						  .style('background-color','#FFFFFF')


		// Draw pie
		svg.append('g')
			.selectAll('path')
			.data(piedata)
            
			.join('path')
				.attr('d', arc)
				.attr('fill',(d,i)=>colors(i))
				.attr('stroke', 'white').text(d=>d.data.name)
				.on('mouseover', (e,d)=>{
					console.log(e)
					console.log(d)

					tooldiv.style('visibility','visible')
							.text(`${d.data.name}:` + `${d.data.value}`)
				})
				.on('mousemove', (e,d)=>{
					tooldiv.style('top', (e.pageY-50) + 'px')
							.style('left', (e.pageX-50) + 'px')
				})
				.on('mouseout',()=>{
					tooldiv.style('visibility','hidden')
				})
                svg.selectAll().data(piedata).join("text").text(d=>d.data.name+":"+d.data.pourcentage+"%").attr("transform",d=>`translate(${arc.centroid(d)})`).style("text-anchor","middle").style("fill","#FFFFFF");
                const  legendG = svg.selectAll(".legend")
                .data(piedata)
                .enter()
                .append('g')
                .attr("transform", function(d,i){
                    return "translate(" + (250) + "," + (i * 15 + 20) + ")";
                })
                .attr("class", "legend");  
        
        
          legendG.append("rect")
              .attr("width", 15)
              .attr("height", 13)
              .attr("fill",  function(d) { 
              return colors(d.value); 
              });
        
                legendG.append("text")
              .text(function(d){ 
                return d.data.name;
              })
              .style("font-size", 17)
              .attr("y", 15)
              .attr("x", 18);
 /////////////////////////////////////////////////////////////////////////endPie///////////////////////////////////////////////////////////////////////            
            
            })}else if(inspection.type==="RiskManagement"){
                axios.get('http://localhost:8082/api/RiskManagementFormInsp/'+inspection.id).then(resp=>{
                    const Form = resp.data
                        var yes = 0;
                        var no = 0;
                        var na = 0;
                        console.log(Form)
                        for(let i = 1; i<=32  ; i++){
                            if(Form["question"+i]=="Yes"){
                                yes=yes+1
    
                            }else if(Form["question"+i]=="No"){
                                no++
                            }else if(Form["question"+i]=="NA"){
                                na++
                            }
                        }
                        z =[{name:"yes",value:yes,pourcentage:((yes/32)*100).toFixed(2)},{name:"no",value:no,pourcentage:((no/32)*100).toFixed(2)},{name:"N/A",value:na,pourcentage:((na/32)*100).toFixed(2)}]
                        body=z;
                    console.log(body)
                    
                    setData(z)
/////////////////////////////////////////pie//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    const piedata = d3.pie().value(d => d.value)(body)
                    console.log(piedata)
                    // Define arcs for graphing 
                    const arc = d3.arc().innerRadius(0).outerRadius(200)
            
                    const colors = d3.scaleOrdinal(['#26E07F','#FA314A','#ff6150'])
            
                    // Define the size and position of svg
                    const svg = d3.select(pieChart.current)
                                    .attr('width', 600)
                                    .attr('height', 600)
                                    // .style('background-color','yellow')
                                    .append('g')
                                        .attr('transform','translate(300,300)')
            
                    // Add tooltip
                    const tooldiv = d3.select('#chartArea')
                                      .append('div')
                                      .style('visibility','hidden')
                                      .style('position','absolute')
                                      .style('background-color','#FFFFFF')
            
            
                    // Draw pie
                    svg.append('g')
                        .selectAll('path')
                        .data(piedata)
                        
                        .join('path')
                            .attr('d', arc)
                            .attr('fill',(d,i)=>colors(i))
                            .attr('stroke', 'white').text(d=>d.data.name)
                            .on('mouseover', (e,d)=>{
                                console.log(e)
                                console.log(d)
            
                                tooldiv.style('visibility','visible')
                                        .text(`${d.data.name}:` + `${d.data.value}`)
                            })
                            .on('mousemove', (e,d)=>{
                                tooldiv.style('top', (e.pageY-50) + 'px')
                                        .style('left', (e.pageX-50) + 'px')
                            })
                            .on('mouseout',()=>{
                                tooldiv.style('visibility','hidden')
                            })
                            svg.selectAll().data(piedata).join("text").text(d=>d.data.pourcentage+"%").attr("transform",d=>`translate(${arc.centroid(d)})`).style("text-anchor","middle").style("fill","#FFFFFF");
                            const  legendG = svg.selectAll(".legend")
                            .data(piedata)
                            .enter()
                            .append('g')
                            .attr("transform", function(d,i){
                                return "translate(" + (250) + "," + (i * 15 + 20) + ")";
                            })
                            .attr("class", "legend");  
                    
                    
                      legendG.append("rect")
                          .attr("width", 15)
                          .attr("height", 13)
                          .attr("fill",  function(d) { 
                          return colors(d.value); 
                          });
                    
                            legendG.append("text")
                          .text(function(d){ 
                            return d.data.name;
                          })
                          .style("font-size", 17)
                          .attr("y", 15)
                          .attr("x", 18);
/////////////////////////////////////////////////////////////////////////endPie///////////////////////////////////////////////////////////////////////
                    
                })}
                console.log(body)
                // Get positions for each data object
		

    },[])

    return (
       <>
       <PageServiceProvider/>
       <div className="grid-container-element">
       <div id='chartArea' class="grid-child-element purple">
			<svg ref={pieChart}></svg>
		</div>
        <div  class="grid-child-element green">
        <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">response</th>
            <th scope="col">value</th>
            <th scope="col">pourcentage</th>
            <th scope="col"></th>
            
          </tr>
       </thead>
       <tbody> {data.map(x=>           
                <tr>
                <td>{x.name}</td>
                <td>{x.value}</td>
                <td>{x.pourcentage}%</td>
              </tr>
                )}
        </tbody> 
      </table>
      
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      {inspection.type == "RiskManagement"&&
        <a href={"http://localhost:8082/api/RiskManagementForm/export/pdf/"+inspection.id}>{t("seeResults")}</a>}
        {inspection.type == "GAPAnalysis"&&
        <a href={"http://localhost:8082/api/GAPAnalysisForm/export/pdf/"+inspection.id}class="btn btn-info" role="button">see Results</a>}
        <Link to="/planingAction"><button class="btn btn-info">prepare actions</button></Link>
		</div>
        </div>

        </div>
       </>
    )
}