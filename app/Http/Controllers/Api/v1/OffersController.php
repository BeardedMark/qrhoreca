<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Offer;
use Illuminate\Http\Request;
use Validator;


class OffersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Offer::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(), [
                "title" => ["required"]
            ]
        );

        if ($validator->fails()){
            return [
                "status" => false,
                $validator->messages()
            ];
        }

        $offer = Offer::create([
            "title" => $request->title,
            "description" => $request->description,
            "image" => $request->image,
            "price" => $request->price
        ]);

        return [
            "status" => true,
            "offer" => $offer
        ];
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $offer = Offer::find($id);

        if(!isset($offer)){
            return response()->json([
                "status" => false,
                "offer" => "Offer not found [id => $id]"
            ])->setStatusCode(404);
        }

        return [
            "status" => true,
            "offer" => $offer
        ];
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
