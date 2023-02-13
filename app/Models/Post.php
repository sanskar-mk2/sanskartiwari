<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'body',
    ];

    protected $appends = [
        'url',
    ];

    protected static function booted()
    {
        static::creating(function (Post $post) {
            $slug = Str::slug($post->title);
            $post->slug = Str::limit($slug, 255, '');
        });
    }

    public function getUrlAttribute()
    {
        return route('posts.show', [$this->id, $this->slug]);
    }
}
