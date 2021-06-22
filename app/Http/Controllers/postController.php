<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class postController extends Controller
{
    public function show()
    {
        return collect(Post::all());
    }

    public function showById($id) {
        return Post::findOrFail($id);
    }

    public function create(Request $request){
        
        $validationData = $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $post = new Post;
        $post->title = $validationData['title'];
        $post->description = $validationData['description'];
        $post->save();

        return response()->json([
            'data' => 'data has been created'
        ]);
    }

    public function update(Request $request, $id)
    {
        $validateData = $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $post = Post::findOrFail($id);
        $post->title =  $validateData['title'];
        $post->description =  $validateData['description'];
        $post->save();

        $msg = [
            'success' => true,
            'message' => 'data updated successfully'
        ];

        return response()->json($msg);
    }

    public function delete($id){
        $post = Post::findOrFail($id);
        $post->delete();

        return response()->json([
            'data' => 'data has been deleted'
        ]);
    }
}
