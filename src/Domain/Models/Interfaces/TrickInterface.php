<?php

declare(strict_types=1);

/**
 * (c) Thibaut Tourte <thibaut.tourte17@gmail.com>
 */

namespace App\Domain\Models\Interfaces;

use App\Domain\DTO\Interfaces\UpdateTrickDTOInterface;
use App\Domain\Models\Media;
use App\Domain\Models\User;
use Doctrine\Common\Collections\Collection;
use Ramsey\Uuid\UuidInterface;

interface TrickInterface
{
    /**
     * Trick constructor.
     * @param User $user
     * @param string $title
     * @param string $description
     * @param FigureGroupInterface $figureGroup
     */
    public function __construct(
        User $user,
        string $title,
        string $description,
        FigureGroupInterface $figureGroup
    );

    /**
     * @param Media $link
     * @return mixed
     */
    public function addLink(Media $link): void;

    /**
     * @param Media $image
     * @return mixed
     */
    public function addImage(Media $image): void;

    /**
     * @param UpdateTrickDTOInterface $dto
     */
    public function updateTrick(UpdateTrickDTOInterface $dto): void;

    /**
     * @return UuidInterface
     */
    public function getId(): UuidInterface;

    /**
     * @return string
     */
    public function getTitle(): string;

    /**
     * @return string
     */
    public function getSlug(): string;

    /**
     * @return string
     */
    public function getDescription(): string;

    /**
     * @return FigureGroupInterface
     */
    public function getFigureGroup(): FigureGroupInterface;

    /**
     * @return User
     */
    public function getUser(): User;

    /**
     * @return Media[]|Collection
     */
    public function getLinks();

    /**
     * @return Media[]|Collection
     */
    public function getImages();
}
