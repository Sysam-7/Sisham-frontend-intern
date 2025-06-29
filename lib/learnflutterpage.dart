import 'package:app1/homepage.dart';
import 'package:flutter/material.dart';

class LearnFlutter extends StatefulWidget {
  const LearnFlutter({super.key});

  @override
  State<LearnFlutter> createState() => _LearnFlutterState();
}

class _LearnFlutterState extends State<LearnFlutter> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: const Text("Learning page of flutter"),

      ),
      body: Column(
        children: [
          
          Image.asset('Images/mac.jpg'),
          const SizedBox(height: 2,),
          const Divider(color: Colors.black),
          
        Container(
          margin: EdgeInsets.all(10),
          padding: EdgeInsets.all(10),
          color: Colors.black,
          width: double.infinity,
          child: Center(child:
           Text('Hola mucho',style: TextStyle(color: Colors.red),)),
          
        ),
        ElevatedButton(onPressed: (){
          Navigator.push(context,
           MaterialPageRoute(builder: (context)=>Homepage()),
          );
        }, 
        style: OutlinedButton.styleFrom(
          shadowColor: Colors.white,
          backgroundColor: Colors.red,
          overlayColor: Colors.green
        
        ),
        
        child: Text("click",
        style: TextStyle(
          fontSize: 20,
          fontWeight: FontWeight.bold,
          color: Colors.black,
        ),
        )),
        
        ],
      ),
    );
  }
}